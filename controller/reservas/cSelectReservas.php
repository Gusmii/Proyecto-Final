<?php

include_once '../../model/reservas_estanciasModel.php';
include_once '../../model/reservas_viajesModel.php';
include_once '../../model/reservasModel.php';


$cVuelos=new reservas_viajesModel();

$cVuelos->setListReservas_viajes();

$listReservas_viajesJson=$cVuelos->getListReservas_viajesJson();

$cReservas=new reservasModel();

$cReservas->setListReservas();

$listReservasJson=$cReservas->getListReservasJson();



$cEstancias=new reservas_estanciasModel();

$cEstancias->setListReservas_estancias();

$listReservas_estanciasJson=$cEstancias->getListReservas_estanciasJson();


$resultados=array("datosSeleccionados"=>$listReservasJson,"datosReservas_estancias" => $listReservas_estanciasJson,"datosReservas_viajes" => $listReservas_viajesJson);
echo json_encode($resultados);

