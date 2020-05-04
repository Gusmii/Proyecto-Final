<?php

include_once '../../model/usuariosModel.php';


$newUser = new usuariosModel();

$apodo=filter_input(INPUT_POST, 'apodo', FILTER_SANITIZE_SPECIAL_CHARS);

if (isset($apodo)){
    $newUser->setApodo($apodo);
}

$nombre=filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_SPECIAL_CHARS);

if (isset($nombre)){
    $newUser->setNombre($nombre);
}

$apellidos=filter_input(INPUT_POST, 'apellidos', FILTER_SANITIZE_SPECIAL_CHARS);

if (isset($apellidos)){
    $newUser->setApellidos($apellidos);
}

$dni=filter_input(INPUT_POST, 'dni', FILTER_SANITIZE_SPECIAL_CHARS);

if (isset($dni)){
    $newUser->setDni($dni);
}

$correo=filter_input(INPUT_POST, 'correo', FILTER_SANITIZE_SPECIAL_CHARS);

if (isset($correo)){
    $newUser->setCorreo($correo);
}

$contrasenia=filter_input(INPUT_POST, 'contrasenia', FILTER_SANITIZE_SPECIAL_CHARS);

if (isset($apodo)){
    $newUser->setContrasenia($apodo);
}

$tipo=1;

if (isset($tipo)){
    $newUser->setTipo($tipo);
}

$newUser->insertUser(); 


?>