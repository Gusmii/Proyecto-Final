<?php

include_once '../../model/ciudadesModel.php';


$cCiudades=new ciudadesModel();

$cCiudades->setListCiudades();

$listCiudadesJson=$cCiudades->getListCiudadesJson();

$resultados=array("datosSeleccionados"=>$listCiudadesJson);
echo json_encode($resultados);

