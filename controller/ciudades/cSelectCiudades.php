<?php

include_once '../../model/ciudadesModel.php';
include_once '../../model/paisesModel.php';
include_once '../../model/continentesModel.php';


$cCiudades=new ciudadesModel();

$cCiudades->setListCiudades();

$listCiudadesJson=$cCiudades->getListCiudadesJson();

$cPaises=new paisesModel();

$cPaises->setListPaises();

$listPaisesJson=$cPaises->getListPaisesJson();


$cContinentes=new continentesModel();

$cContinentes->setListContinentes();

$listContinentesJson=$cContinentes->getListContinentesJson();

$resultados=array("datosCiudades"=>$listCiudadesJson, "datosPaises" => $listPaisesJson, "datosContinentes" => $listContinentesJson);
echo json_encode($resultados);

