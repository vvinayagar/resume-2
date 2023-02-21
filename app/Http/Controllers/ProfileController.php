<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Profile;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $user = $request->user();

        $profiles = Profile::where('user_id', $user->id)->get();

        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'images' => $profiles
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    /**
     * Add the user's profile photo.
     */
    public function addPhoto(Request $request)
    {
        $user = $request->user();
        $profiles = Profile::where('user_id', $user->id)->get();
        // $request->validate([
        //     'file' => "required|mimes:png,jpg,jpeg,gif"
        // ]);

        $fileName = time().'.'.$request->file->extension();
        $request->file->move(public_path('uploads'), $fileName);

        $profile = new Profile();
        $profile->user_id = $user->id;
        $profile->filename = $fileName;
        $profile->save();

       //return Redirect::route('profile.edit');
       return Inertia::render('Profile/Edit',[
        'message'=>'Photo uploaded.',
        'images' => $profiles
    ]);
    }
}
