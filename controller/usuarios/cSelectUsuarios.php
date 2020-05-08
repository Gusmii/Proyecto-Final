<?php


include_once '../../model/usuariosModel.php';


$cUsuarios=new usuariosModel();

$cUsuarios->setListUsuarios();

$listUsuariosJson=$cUsuarios->getListUsuariosJson();


$resultados=array("datosSeleccionados"=>$listUsuariosJson);
echo json_encode($resultados);

