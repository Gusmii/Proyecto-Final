<?php

include_once '../../model/ciudadesModel.php';
include_once '../../model/paisesModel.php';
include_once '../../model/continentesModel.php';
include_once '../../model/vuelosModel.php';


$cVuelos=new vuelosModel();

$cVuelos->setList2Vuelos();

$listVuelosJson=$cVuelos->getListVuelosJson();


$resultados=array("datosSeleccionados"=>$listVuelosJson);
echo json_encode($resultados);

