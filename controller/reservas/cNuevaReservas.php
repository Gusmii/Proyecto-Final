<?php

include_once '../../model/reservas_estanciasModel.php';
include_once '../../model/reservas_viajesModel.php';
include_once '../../model/reservasModel.php';

$arrayEstancias=$_GET["arrayEstancias"];
$arrayVuelos=$_GET["arrayVuelos"];
$idNuevaReserva=$_GET["nuevaReserva"];
$idUser=$_GET["idUser"];

for ($x = 0; $x <= $arrayEstancias; $x++) {
    echo "The number is: $x <br>";

$cEstancias=new reservas_estanciasModel();

$cEstancias->setListReservas_estancias();


}

for ($x = 0; $x <= $arrayEstancias; $x++) {
    echo "The number is: $x <br>";
    
    $cVuelos=new reservas_viajesModel();
    
    $cVuelos->setListReservas_viajes();
    
    
    $cReservas=new reservasModel();
    
    $cReservas->setListReservas();
    
    
    $cEstancias=new reservas_estanciasModel();
    
    $cEstancias->setListReservas_estancias();
    
    
}
