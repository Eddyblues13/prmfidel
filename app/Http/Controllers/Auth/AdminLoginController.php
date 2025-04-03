<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Validation\ValidatesRequests;

class AdminLoginController extends Controller
{
    use ValidatesRequests;

    public function adminLoginForm()
    {
        return view('auth.admin_login');
    }

    public function login(Request $request)
    {
        // Validate the request inputs
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:4',
        ]);

        // Attempt to authenticate the admin
        if (Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password])) {
            // If successful, redirect to the admin dashboard
            return redirect()->intended(route('admin.home'));
        }

        // If authentication fails, redirect back with an error message
        return redirect()->back()->withInput($request->only('email'))->withErrors([
            'email' => 'The provided credentials do not match our records.',


        ]);
    }


    public function changePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required|string',
            'new_password' => [
                'required',
                'string',
                'min:8',
                'confirmed',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/'
            ],
        ], [
            'new_password.regex' => 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.'
        ]);

        $admin = Auth::guard('admin')->user();

        if (!Hash::check($request->current_password, $admin->password)) {
            return response()->json([
                'success' => false,
                'errors' => ['current_password' => ['The current password is incorrect.']]
            ], 422);
        }

        $admin->password = $request->new_password;
        $admin->save();

        return response()->json([
            'success' => true,
            'message' => 'Password changed successfully!'
        ]);
    }

    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login')->with('success', 'Logged out successfully.');
    }
}
