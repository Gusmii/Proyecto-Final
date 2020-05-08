<?php

include_once "connect_data.php";
include_once 'usuariosClass.php';
include_once 'tipo_usuariosModel.php';


class usuariosModel extends usuariosClass{
    
    private $link;
    private $list=array();
    
    private $objectTipoUsuario;
    
    
    
    /**
     * @param mixed $objectTipoUsuario
     */
    public function setObjectTipoUsuario($objectTipoUsuario)
    {
        $this->objectTipoUsuario = $objectTipoUsuario;
    }
    
    /**
     * @return mixed
     */
    public function getObjectTipoUsuario()
    {
        return $this->objectTipoUsuario;
    }

    
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

                    $this->setId($row['id']);
                    $this->setTipo($row['tipo']); //Setea el idUser de este usuario para tener la id con la que identificarlo
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
    
    function setListUsuarios()  // fill country : $this->list
    {
        $this->OpenConnect();
        $sql="call spAllUsuarios()";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $newUsuario=new UsuariosModel();
            $newUsuario->setId($row['id']);
            $newUsuario->setApodo($row['apodo']);
            $newUsuario->setNombre($row['nombre']);
            $newUsuario->setApellidos($row['apellidos']);
            $newUsuario->setDni($row['dni']);
            $newUsuario->setCorreo($row['correo']);
            $newUsuario->setContrasenia($row['contrasenia']);
            $newUsuario->setTipo($row['tipo']);
            
            $tipoUsuario= new tipo_usuariosModel();
            $tipoUsuario->setId($row['tipo']);
            $tipoUsuario->findTipoUsuarioById();
            $newUsuario->setObjectTipoUsuario($tipoUsuario);
            
            
            array_push($this->list, $newUsuario);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    
    public function findUsuarioById() {
        $this->OpenConnect();
        $id=$this->id;
        $sql = "CALL spFindUsuarioById($id)";
        $result= $this->link->query($sql);
        
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $this->setId($row['id']);
            $this->setApodo($row['apodo']);
            $this->setNombre($row['nombre']);
            $this->setApellidos($row['apellidos']);
            $this->setDni($row['dni']);
            $this->setCorreo($row['correo']);
            $this->setContrasenia($row['contrasenia']);
            $this->setTipo($row['tipo']);
            
            $tipoUsuario= new tipo_usuariosModel();
            $tipoUsuario->setId($row['tipo']);
            $tipoUsuario->findTipoUsuarioById();
            $this->setObjectTipoUsuario($tipoUsuario);
            
            
            array_push($this->list, $this);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    function getListUsuariosJson() {
        // returns the list of objects in a srting with JSON format
        $arr=array();
        
        foreach ($this->list as $object) {
            $vars = $object->getObjectVars();
            
            $objTipoUsuario=$object->getObjectTipoUsuario()->getObjectVars();
            $vars['objectTipoUsuario']=$objTipoUsuario;
            
            array_push($arr, $vars);
        }
        return json_encode($arr);
    }

}

