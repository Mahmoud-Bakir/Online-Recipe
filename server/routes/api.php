<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;


//Authenticated APIS
Route::group(["middleware" => "auth:api"], function () {

    Route::group(["prefix" => "user"], function () {
        Route::get("profile", [AuthController::class, "profile"]);
        Route::post("logout", [AuthController::class, "logout"]);
        Route::post("refresh", [AuthController::class, "refresh"]);
        Route::get("users",[UserController::class, "getAllUsers"]);
        Route::get("cuisines",[UserController::class, "getAllCuisines"]);
        Route::post("add_recipe", [UserController::class, "addRecipe"]);

    });
});
Route::group(["prefix" => "guest"], function () {
    Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
    Route::post("login", [AuthController::class, "login"]);
    Route::post("register", [AuthController::class, "register"]);
});
