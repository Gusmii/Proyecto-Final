<?php

include_once '../../model/usuariosModel.php';


$newUser = new usuariosModel();

$apodo=filter_input(INPUT_GET,"apodo");

if (isset($apodo)){
    $newUser->setApodo($apodo);
}

$nombre=filter_input(INPUT_GET,"nombre");

if (isset($nombre)){
    $newUser->setNombre($nombre);
}

$apellidos=filter_input(INPUT_GET,"apellidos");

if (isset($apellidos)){
    $newUser->setApellidos($apellidos);
}

$dni=filter_input(INPUT_GET,"dni");

if (isset($dni)){
    $newUser->setDni($dni);
}

$correo=filter_input(INPUT_GET,"correo");

if (isset($correo)){
    $newUser->setCorreo($correo);
}

$contrasenia=filter_input(INPUT_GET,"contrasenia");

if (isset($apodo)){
    $newUser->setContrasenia($apodo);
}

$tipo=1;

if (isset($tipo)){
    $newUser->setTipo($tipo);
}ª

$newUser->insertUser(); 


?>