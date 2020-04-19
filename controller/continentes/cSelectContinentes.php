<?php

include_once '../../model/continentesModel.php';


$cContinente=new continentesModel();

$cContinente->setListContinentes();

$listCountriesJson=$cContinente->getListContinentesJson();

echo $listCountriesJson;

