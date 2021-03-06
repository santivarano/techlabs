<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTablePrivilegio extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('privilegio'))
        {
            Schema::create('privilegio', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('idRol')->unsigned();
                $table->integer('idUsuario')->unsigned();
                $table->timestamps();
                $table->foreign('idRol')->references('id')->on('rol');
                $table->foreign('idUsuario')->references('id')->on('usuario');
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
        Schema::dropIfExists('privilegio');
    }
}
