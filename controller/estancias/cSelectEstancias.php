<?php

include_once '../../model/ciudadesModel.php';
include_once '../../model/paisesModel.php';
include_once '../../model/continentesModel.php';
include_once '../../model/estanciasModel.php';


$cEstancias=new estanciasModel();

$cEstancias->setListEstancias();

$listEstanciasJson=$cEstancias->getListEstanciasJson();


$resultados=array("datosSeleccionados"=>$listEstanciasJson);
echo json_encode($resultados);

