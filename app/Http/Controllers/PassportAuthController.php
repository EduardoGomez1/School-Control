<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

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

    public function register(Request $request){
        $this->validate($request, [
            'name' => 'required|min:4',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $token = $user->createToken('LaravelAuthApp')->access_token;
        return response()->json(['token' => $token], 200);
    }

    public function login(Request $request){
        $data = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if(auth()->attempt($data)){
            $token = auth()->user()->createToken('LaravelAuthApp')->accessToken;
            return response()->json(['token' => $token], 200);
        }
        else{
            return response()->json(['error' => 'No Autorizado'], 401);
        }
    }

    public function authenticatedUserDetails(){
        //returns details
        return response()->json(['authenticated-user' => auth()->user()], 200);
    }

    
}
