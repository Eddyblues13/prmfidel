<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function showLoginForm()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password], $request->remember)) {
            return response()->json([
                'success' => true,
                'message' => 'Login successful!',
                'redirect' => url('user/home') // Make sure this route exists
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'These credentials do not match our records.',
            'errors' => [
                'email' => ['Invalid email or password']
            ]
        ], 422);
    }
}
