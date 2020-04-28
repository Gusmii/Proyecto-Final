<?php
include_once '../model/userModel.php';

//Recoge todos los datos
$username=filter_input(INPUT_POST, 'user', FILTER_SANITIZE_SPECIAL_CHARS);
$password1=filter_input(INPUT_POST, 'password1', FILTER_SANITIZE_SPECIAL_CHARS);
$password2=filter_input(INPUT_POST, 'password2', FILTER_SANITIZE_SPECIAL_CHARS);

$response=array();

//user, password and captcha verify
if(($username != null) && ($password1 != null) && ($password2 != null)) {  //Mira a ver si estan vacios
    
    $user = new userModel();            //Crea uno nuevo y setea los datos recividos
    $user->setUsername($username);
    $user->setPassword1($password1);
    $user->setPassword2($password2);
 
    if ($user->login()) { //si es correcto el username y el password inicia sesion
        session_start();
        
        $_SESSION['idUser']=$user->getIdUser();
        $_SESSION['username']=$username;
        
        $response['idUser']=$_SESSION['idUser'];
        $response['error']="Not error";            
    }else {        
        //usuario o contraseña incorrecto
        $response['error']="User or password error";
    }
}else {   
    //usuario o contraseña no introducidos
    $response['error']="User or password error";
}

echo json_encode($response);
?>