<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamps();
        });
        Schema::create('cuisines', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
     
        });
        Schema::create('recipes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('cuisine_id');
            $table->text('image_url');
            $table->string('ingredients');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('cuisine_id')->references('id')->on('cuisines');
        });
      
        Schema::create('likes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('recipe_id');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('recipe_id')->references('id')->on('recipes');
     
        });

        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('recipe_id');
            $table->string("content");
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('recipe_id')->references('id')->on('recipes');
        });

        Schema::create('shopping_lists', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string("list");
            $table->timestamps();
    
            $table->foreign('user_id')->references('id')->on('users');

        });
    }
         
    

    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('recipes');
        Schema::dropIfExists('likes');
        Schema::dropIfExists('comments');
    }
};
