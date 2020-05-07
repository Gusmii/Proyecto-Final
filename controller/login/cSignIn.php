<?php
include_once '../../model/usuariosModel.php';

//Recoge todos los datos
$username=filter_input(INPUT_POST, 'user', FILTER_SANITIZE_SPECIAL_CHARS);
$password=filter_input(INPUT_POST, 'password', FILTER_SANITIZE_SPECIAL_CHARS);


$response=array();

//user, password and captcha verify
if(($username != null) && ($password != null)) {  //Mira a ver si estan vacios
    
    $user = new usuariosModel();            //Crea uno nuevo y setea los datos recividos
    $user->setApodo($username);
    $user->setContrasenia($password);
 
    if ($user->login()) { //si es correcto el username y el password inicia sesion
        session_start();
        
        $_SESSION['idUser']=$user->getId();
        $_SESSION['username']=$username;
        $_SESSION['tipo']=$user->getTipo();
        
        $response['idUser']=$_SESSION['idUser'];
        $response['username']=$_SESSION['username'];
        $response['tipo']=$_SESSION['tipo'];
        $response['error']="No hay errores";            
    }else {        
        //usuario o contraseña incorrecto
        $response['error']="El usuario o la contraseña estan mal";
    }
}else {   
    //usuario o contraseña no introducidos
    $response['error']="No se han rellenado todos los campos";
}

echo json_encode($response);
?>