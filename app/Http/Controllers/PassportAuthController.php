<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class PassportAuthController extends Controller
{
    public function index()
    {
        $users = User::all();
        return $users;
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        echo "Registro Eliminado";
    }

    public function register(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'required|min:4|max:150',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ]);

        $validateData['password'] = Hash::make($request->password);

        $user = User::create($validateData);

        $token = $user->createToken('LaravelAuthApp')->accessToken;
        return response([
            'user' => $user,
            'access_token' => $token
        ], 200);
    }

    public function login(Request $request)
    {
        $data = $request ->validate([
            'email' => 'email|required',
            'password' => 'required',
        ]);

        if (!auth()->attempt($data)) {
            return response(['error' => 'No Autorizado'], 401);
        }
        $token = auth()->user()->createToken('LaravelAuthApp')->accessToken;
        return response(['user' => auth()->user(), 'access_token' => $token], 200);
    }

    public function authenticatedUserDetails()
    {
        //returns details
        return response()->json(['authenticated-user' => auth()->user()], 200);
    }
}
