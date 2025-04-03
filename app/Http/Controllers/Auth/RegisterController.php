<?php

namespace App\Http\Controllers\Auth;


use App\Models\User;
use App\Models\Referral;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /**
     * Show the registration form.
     *
     * @return \Illuminate\View\View
     */
    public function showRegistrationForm(Request $request)
    {
        $referral_code = $request->query('referral_code');
        $countries = config('countries');
        $referred_by = $request->query('ref', null);

        return view('auth.register', compact('countries', 'referred_by', 'referral_code'));
    }

    /**
     * Handle the registration form submission.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        // Honeypot check
        if (!empty($request->honeypot)) {
            return response()->json([
                'success' => false,
                'message' => 'Bot detected!'
            ], 403);
        }

        // Timestamp check
        if (isset($request->timestamp) && (now()->timestamp - $request->timestamp) < 3) {
            return response()->json([
                'success' => false,
                'message' => 'Submission too fast!'
            ], 403);
        }

        // Validate the request data
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'username' => ['required', 'string', 'min:3', 'max:255', 'unique:users,username', 'alpha_dash'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'phone_number' => ['required', 'string', 'max:15', 'unique:users,phone_number'],
            'country' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'confirmation' => ['required', 'accepted'],
            'referred_by' => ['nullable', 'exists:users,username'],
        ]);

        // If validation fails, return error response
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            // Start database transaction
            DB::beginTransaction();

            // Find referrer if exists
            $referrer = null;
            if ($request->referred_by) {
                $referrer = User::where('username', $request->referred_by)->first();
            }

            // Create new user
            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'country' => $request->country,
                'password' => Hash::make($request->password),
                'kyc_status' => 0,
                'card' => 0,
                'pass' => 0,
                'referred_by' => $referrer ? $referrer->username : null,
            ]);

            // Create referral record if referred
            if ($referrer) {
                Referral::create([
                    'user_id' => $user->id,
                    'referrer_id' => $referrer->id,
                    'referrer_username' => $referrer->username,
                ]);

                // You might want to add referral bonus logic here
                // For example:
                // $referrer->increment('referral_balance', 10);
            }

            Auth::login($user);

            // Commit transaction
            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Registration successful!',
                'redirect' => url('user/home')
            ]);
        } catch (\Exception $e) {
            // Rollback transaction on error
            DB::rollBack();

            // Log the error for debugging
            Log::error('Registration error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'An error occurred during registration. Please try again.'
            ], 500);
        }
    }
}
