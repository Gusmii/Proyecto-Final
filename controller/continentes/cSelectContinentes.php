<?php

include_once '../../model/continentesModel.php';

$cContinentes=new continentesModel();

$cContinentes->setListContinentes();

$listContinentesJson=$cContinentes->getListContinentesJson();

$resultados=array("datosSeleccionados"=>$listContinentesJson);
echo json_encode($resultados);

