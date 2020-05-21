<?php

include_once '../../model/vuelosModel.php';
include_once '../../model/estanciasModel.php';
include_once '../../model/reservasModel.php';

$cReservas=new reservasModel();

$cReservas->setListReservas();

$listReservasJson=$cReservas->getListReservasJson();

$cEstancias=new estanciasModel();

$cEstancias->setListEstancias();

$listEstanciasJson=$cEstancias->getListEstanciasJson();

$cVuelos=new vuelosModel();

$cVuelos->setListVuelos();

$listVuelosJson=$cVuelos->getListVuelosJson();

$resultados=array("datosReservas"=>$listReservasJson,"datosEstancias"=>$listEstanciasJson,"datosVuelos"=>$listVuelosJson);
echo json_encode($resultados);

