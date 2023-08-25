<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Cuisine;
use App\Models\Recipe;
use App\Models\Like;
use Auth;

class UserController extends Controller
{
    function getAllUsers(){
        $users = User::all();

        return response()->json([
            "status" => "success", 
            "data" => $users
        ]);
    }
    function getAllCuisines(){
        $cuisines = Cuisine::all();
        
        return response()->json([
            "status" => "success", 
            "data" => $cuisines
        ]);
    }
    function addRecipe(Request $request) {
        $user = Auth::user();
        $recipe = new Recipe;
        $recipe->name = $request->name;
        $recipe->cuisine_id = $request->cuisine_id;
        $recipe->image_url = $request->image_url;
        $recipe->ingredients = $request->ingredients;
        $recipe->user_id=$user->id;

        $recipe->save();
        return response()->json([
            "status"=>"success",
            "data"=>$recipe
        ]);
    }

    function searchRecipe(Request $request)
    {
        $query = $request->input('query');
        
        $results = Recipe::where('name', 'like', "%$query%")
         ->orWhereHas('cuisine', function ($subQuery) use ($query) {
             $subQuery->where('name', 'like', "%$query%");
         })
         ->with('cuisine') // Eager load the related cuisine
         ->get();
    
        return response()->json(["result" => $results]);
    }

     function getAllRecipes(){

    $recipes = Recipe::withCount('likes')->get();
    return response()->json([
        "recipes" => $recipes
    ]);
    }
 
     function likeRecipe(Request $request){
      $user = Auth::user();
      $recipe = Recipe::findOrFail($request->id);
      $user->likes()->attach($recipe);

    return response()->json(['message' => 'Recipe liked successfully']);
}
}

