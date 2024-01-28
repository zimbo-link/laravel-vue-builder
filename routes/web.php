<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DocumentController;


Route::get('/', [HomeController::class,'index'])->name('home.index');
Route::get('/about', [HomeController::class,'about'])->name('home.about');

Route::get('/document/create', [DocumentController::class,'create'])->name('document.create');
Route::post('/document/store', [DocumentController::class,'store'])->name('document.store');