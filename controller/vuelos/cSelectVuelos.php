<?php

include_once '../../model/vuelosModel.php';


$cVuelos=new vuelosModel();

$cVuelos->setListVuelos();

$listVuelosJson=$cVuelos->getListVuelosJson();

$resultados=array("datosVuelos"=>$listVuelosJson);
echo json_encode($resultados);

