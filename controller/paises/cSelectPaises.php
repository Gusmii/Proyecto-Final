<?php

include_once '../../model/paisesModel.php';
include_once '../../model/continentesModel.php';


$cPaises=new paisesModel();

$cPaises->setListPaises();

$listPaisesJson=$cPaises->getListPaisesJson();


$resultados=array("datosSeleccionados"=>$listPaisesJson);
echo json_encode($resultados);

