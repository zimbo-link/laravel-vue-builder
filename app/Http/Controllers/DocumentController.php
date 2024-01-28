<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DocumentController extends Controller
{
    public function create()
    {
        return Inertia::render('Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'json' => 'required|string',
        ]);

        $document = Document::findOrFail($request->id);

        $document->fill($request->all());

        $document->save(); 

        return to_route('home.index');
    }
}
