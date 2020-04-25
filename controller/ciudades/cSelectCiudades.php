<?php

include_once '../../model/ciudadesModel.php';


$cCiudades=new ciudadesModel();

$cCiudades->setListCiudades();

$listCiudadesJson=$cCiudades->getListCiudadesJson();

echo $listCiudadesJson;

