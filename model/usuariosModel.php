<?php

include_once "connect_data.php";
include_once 'usuariosClass.php';


class usuariosModel extends usuariosClass{
    
    private $link;
    private $list=array();
    

    
    public function OpenConnect()
    {
        $konDat=new connect_data();
        try
        {
            $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
        }
        catch(Exception $e)
        {
            echo $e->getMessage();
        }
        $this->link->set_charset("utf8");
    }
    
    public function CloseConnect()
    {
        mysqli_close ($this->link);
        
    }

    public function login() { 
        // login, fill and return id of the user
     
        $this->OpenConnect();
        
        $apodo=$this->apodo;
        $contrasenia=$this->contrasenia;
        
        $sql="call spLogin('$apodo', '$contrasenia')"; //Devuelve los datos del usuario
        $result= $this->link->query($sql);
        
        $userExists=false;
        
        if($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
          //  $passwordEncripted=$row['contrasenia'];
            
         //   if(password_verify($this->getContrasenia(), $passwordEncripted)) { //Si la contraseña encriptada es igual que la introduciad en el imput

                    $this->setId($row['id']); //Setea el idUser de este usuario para tener la id con la que identificarlo
                    $userExists=true; //Si esta todo bien devuelve true

                  
         //   }

            //Si la contraseña encriptada no es igual el userExist sera false por lo que devolvera false

        }
        return $userExists;
        
        mysqli_free_result($result);
        $this->CloseConnect();     
    }

    public function insertUser() {
        $this->OpenConnect();
        
        $apodo=$this->apodo;
        $nombre=$this->nombre;
        $apellidos=$this->apellidos;
        $dni=$this->dni;
        $correo=$this->correo;
        $contrasenia=$this->contrasenia;
        $tipo=$this->tipo;
      
        $sql = "CALL spInsertarUsuario('$apodo', '$nombre', '$apellidos', '$dni', '$correo', '$contrasenia', $tipo)";
        $result= $this->link->query($sql);
        
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                      
            array_push($this->list, $this);

        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }

}

