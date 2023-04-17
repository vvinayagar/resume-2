<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{
    public function index(): Response
    {
        $companies = Company::all();

        return Inertia::render('Admin/Company/Companies', [
            'message'=>'companies loaded.',
            'companies' => $companies
        ]);
    }


    public function store(Request $request)
    {
        $user = Auth::user();

        $company = new Company();

        if ($request->file) {
            $fileName = time().'.'.$request->file->extension();
            $request->file->move(public_path('uploads'), $fileName);
            $company->logo = $fileName;
        }

        $company->name = $request->name;
        $company->type = $request->type;
        $company->description = $request->description;
        $company->start = $request->start;
        $company->end = $request->end;
        $company->position = $request->position;
        $company->user_id = $user->id;
        $company->save();

        return response()->redirectToRoute("admin.company.index");

    }

    public function delete(Request $request)
    {
        $company = Company::find($request->id);
        $company->delete();

        return response()->redirectToRoute("admin.company.index");

    }
}
