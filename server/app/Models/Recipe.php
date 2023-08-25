<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    public function cuisine() {
       return $this->belongsTo(Cuisine::class);
   }

   public function likes(){
    return $this->hasMany(Like::class);
   }
}