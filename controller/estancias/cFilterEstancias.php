<?php

include_once '../../model/estanciasModel.php';

$nombreFiltro=$_GET["nombreFiltro"][0];
$cEstancias=new estanciasModel();

$cEstancias->filtrarEstancias($nombreFiltro);

$listEstanciasJson=$cEstancias->getListEstanciasJson();

$resultados=array("datosEstanciasFiltrados"=>$listEstanciasJson);
echo json_encode($resultados);
