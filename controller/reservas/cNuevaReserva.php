<?php

include_once '../../model/reservas_estanciasModel.php';
include_once '../../model/reservas_viajesModel.php';
include_once '../../model/reservasModel.php';

if(isset ($_POST["arrayEstancias"])){
$arrayEstancias=$_POST["arrayEstancias"];
}

if(isset ($_POST["arrayVuelos"])){
    $arrayVuelos=$_POST["arrayVuelos"];
}

$idNuevaReserva=$_POST["nuevaReserva"];
$idUser=$_POST["idUser"];
$fechaMaxima=$_POST["fechaMaxima"];
$fechaMinima=$_POST["fechaMinima"];


$cReservas=new reservasModel();
$cReservas->setId_usuario($idUser);
$cReservas->setFecha_inicio($fechaMinima);
$cReservas->setFecha_fin($fechaMaxima);
$cReservas->crearNuevaReserva();

$idNuevaReserva++; 
if(isset ($arrayEstancias)){
    for ($x = 0; $x < count($arrayEstancias); $x++) {
        
        $cEstancias=new reservas_estanciasModel();
        
        $cEstancias->setId_reserva($idNuevaReserva);
        $cEstancias->setId_estancia($arrayEstancias[$x]["idEstancia"]);
        $cEstancias->setFecha_inicio($arrayEstancias[$x]["fecha"]);
        $cEstancias->setNuevaEstanciaReserva();
        
    }
}

if(isset ($arrayVuelos)){
    
    for ($x = 0; $x < count($arrayVuelos); $x++) {
        
        $cVuelos=new reservas_viajesModel();
        
        $cVuelos->setId_reserva($idNuevaReserva);
        $cVuelos->setId_viaje($arrayVuelos[$x]["idVuelo"]);
        $cVuelos->setNuevoViajeReserva();
        
    }
}
