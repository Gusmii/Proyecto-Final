<?php

include_once '../../model/vuelosModel.php';
include_once '../../model/estanciasModel.php';

$cEstancias=new estanciasModel();

$cEstancias->setListEstancias();

$listEstanciasJson=$cEstancias->getListEstanciasJson();

$cVuelos=new vuelosModel();

$cVuelos->setListVuelos();

$listVuelosJson=$cVuelos->getListVuelosJson();

$resultados=array("datosEstancias"=>$listEstanciasJson,"datosVuelos"=>$listVuelosJson);
echo json_encode($resultados);

