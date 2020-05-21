<?php

include_once '../../model/estanciasModel.php';


$cEstancias=new estanciasModel();

$cEstancias->setList2Estancias();

$listEstanciasJson=$cEstancias->getListEstanciasJson();


$resultados=array("datosSeleccionados"=>$listEstanciasJson);
echo json_encode($resultados);

