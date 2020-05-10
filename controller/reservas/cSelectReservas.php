<?php

include_once '../../model/reservas_estanciasModel.php';
include_once '../../model/reservas_viajesModel.php';
include_once '../../model/reservasModel.php';
include_once '../../model/vuelosModel.php';

include_once '../../model/estanciasModel.php';


$cEstancias=new estanciasModel();

$cEstancias->setListEstancias();

$listEstanciasJson=$cEstancias->getListEstanciasJson();


$cVuelos=new vuelosModel();

$cVuelos->setListVuelos();

$listVuelosJson=$cVuelos->getListVuelosJson();



$cVuelos=new reservas_viajesModel();

$cVuelos->setListReservas_viajes();

$listReservas_viajesJson=$cVuelos->getListReservas_viajesJson();

$cReservas=new reservasModel();

$cReservas->setListReservas();

$listReservasJson=$cReservas->getListReservasJson();



$cEstancias=new reservas_estanciasModel();

$cEstancias->setListReservas_estancias();

$listReservas_estanciasJson=$cEstancias->getListReservas_estanciasJson();


$resultados=array("datosSeleccionados"=>$listReservasJson,"datosReservas_estancias" => $listReservas_estanciasJson,"datosReservas_viajes" => $listReservas_viajesJson,"datosEstancias"=>$listEstanciasJson,"datosVuelos"=>$listVuelosJson);
echo json_encode($resultados);

