<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Skill;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class SkillController extends Controller
{
    public function index(Request $request): Response
    {
        $skills = Skill::all();

        return Inertia::render('Admin/Skill/Skills', [
            'message'=>'skills loaded.',
            'skills' => $skills
        ]);
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        $skill = new Skill();
        $skill->name = $request->name;
        $skill->description = $request->description;
        $skill->type = $request->type;
        $skill->year = $request->year;
        $skill->level = $request->level;
        $skill->user_id = $user->id;

        if ($request->file) {
            $fileName = time().'.'.$request->file->extension();
            $request->file->move(public_path('uploads'), $fileName);
            $skill->logo = $fileName;
        }

        $skill->save();

        return response()->redirectToRoute("admin.skill.index");
    }


    public function delete(Request $request)
    {
        $skill = Skill::find($request->id);

        $skill->delete();
        return response()->redirectToRoute("admin.skill.index");
    }
}
