<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Configuracion extends Model
{
    protected $table = "Configuracion";
    protected $fillable = ["estrellas", "copas"];

}