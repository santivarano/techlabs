<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableUsuario extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('usuario')) 
        {
            Schema::create('usuario', function (Blueprint $table) 
            {
            $table->increments('id');
            $table->string('nickname')->unique();
            $table->string('password')->nullable();
            $table->boolean('estado');
            $table->timestamps();
            $table->rememberToken();
            });
        }    
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuario');
    }
}
