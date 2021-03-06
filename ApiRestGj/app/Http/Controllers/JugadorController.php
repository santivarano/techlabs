<?php

namespace App\Http\Controllers;

use App\Jugador;
use Illuminate\Http\Request;
use App\Configuracion;
use Illuminate\Support\Facades\DB;

class JugadorController extends Controller
{
    //Obtener jugadores
    public function getJugadores()
    {
        return response()->json(Jugador::all());
    }

    //Obtener jugador por nombre
    public function getJugador($nick)
    {
        $jugador = Jugador::where('nickname', $nick)->first();
        return response()->json($jugador);
    }

    //Se crea un nuevo jugador
    public function nuevoJugador($nick,$genre)
    {
        $data = array();
        //verificar que no exista el jugador
        $player=Jugador::where('nickname',$nick)
                    ->where('genero',$genre)
                    ->get()
                    ->first();
        if(!empty($player))
        {
            $data["data"]="null";
        }
        else
        {
            $nuevoJugador = new Jugador();
            $nuevoJugador->nickname=$nick;
            $nuevoJugador->genero=$genre;
            $nuevoJugador->estado = 1;
            $nuevoJugador->copas = 0;
            $nuevoJugador->estrellas = 0;
            $nuevoJugador->save();  
            $data["data"]="datos guardados";  
        }
       /* $nuevoJugador = Jugador::create(
            ['nickname' => $nick, 
            ]
        );*/

        return $data;

    }
    public function cps($estrellas,$copas)
    {
        //si esta vacia la tabla
        $obb=Configuracion::find(1);
        if(empty($obb))
            {
                $config=new Configuracion();
                $config->estrellas=$estrellas;
                $config->copas=$copas;
                $config->save();
                return $data['data']="copas y estrellas, registradas";
            }
        else
        {
            $obb->estrellas=$estrellas;
            $obb->copas=$copas;
            $obb->save();
            return $data['data']="copas y estrellas, modificadas";

        }
    }
    public function registrarPuntaje($nick,$estrellas)
    {
        $buscarP=Jugador::where('nickname','=',$nick)->get()->first();
        $copas=0;
        $data = array();
        if(!empty($buscarP))
        {   
            //sumar las estrellas
            $estrellasSuma=$estrellas + $buscarP->estrellas;
            //equivalente estrellas
            $estrellasB=Configuracion::find(1);
            if(!empty($estrellasB))
            {
                $a=intval($estrellasSuma/$estrellasB->estrellas);
                // VERIFICA QUE RETORNA ESTA DIVISION SI ENTERO O NO
                if($a>0)
                {
                    $copas=$a;
                }
            }
            $buscarP->estrellas=$estrellasSuma;
            $buscarP->copas= $copas;
            $buscarP->save();
            $data['data']="estrellas registradas";
            $data['estrellas']=$copas;
        }
        else
        {
            $data['data']="null";
        }

        return $data;
    }

    public function leaderBoard()
    {
        $jugadores = DB::table('jugador')->orderBy('estrellas','desc')->take(5)->get();

        return  $jugadores;

    }

    public function players()
    {
        if(!empty(Jugador::all()))
            {
                return $data['data']=Jugador::all();
            }
        else {
            return $data['data']='null';
        }
    }

}