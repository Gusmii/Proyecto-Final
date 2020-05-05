<?php
session_start();

$response=array();

if (isset($_SESSION['idUser']) && isset($_SESSION['username'])) {  //Carga estos datos en la sesion y manda la respuesta de si esta logueado o no

    $response['idUser']=$_SESSION['idUser'];
    $response['username']=$_SESSION['username'];
    $response['type']=$_SESSION['type'];
    $response['error']="Logged";
}else {
    $response['error']="Not logged"; //Si no esta logueado devolvera esto
}

echo json_encode($response);
?>