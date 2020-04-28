<?php

include_once '../../model/estanciasModel.php';


$cEstancias=new estanciasModel();

$cEstancias->setListEstancias();

$listEstanciasJson=$cEstancias->getListEstanciasJson();

$resultados=array("datosEstancias"=>$listEstanciasJson);
echo json_encode($resultados);

