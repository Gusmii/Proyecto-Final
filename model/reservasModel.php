<?php

include_once "connect_data.php";
include_once 'reservasClass.php';
include_once 'usuariosModel.php';



class reservasModel extends reservasClass{
    
    private $link;
    private $list=array();
    
    private $objectUsuario;
    
    
    
    /**
     * @param mixed $objectUsuario
     */
    public function setObjectUsuario($objectUsuario)
    {
        $this->objectUsuario = $objectUsuario;
    }
    
    /**
     * @return mixed
     */
    public function getObjectUsuario()
    {
        return $this->objectUsuario;
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
        $this->link->set_charset("utf8"); // honek behartu egiten du aplikazio eta
        //                  //databasearen artean UTF -8 erabiltzera datuak trukatzeko
    }
    
    public function CloseConnect()
    {
        mysqli_close ($this->link);
        
    }
    function setListreservas()  // fill country : $this->list
    {
        $this->OpenConnect();
        $sql="call spAllReservas()";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $newReserva=new reservasModel();
            $newReserva->setId($row['id']);
            $newReserva->setFecha_inicio($row['fecha_inicio']);
            $newReserva->setFecha_fin($row['fecha_fin']);
            $newReserva->setId_usuario($row['id_usuario']);
            
            $usuario= new usuariosModel();
            $usuario->setId($row['id_usuario']);
            $usuario->findUsuarioById();
            $newReserva->setObjectUsuario($usuario);
            
            array_push($this->list, $newReserva);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    
    public function crearNuevaReserva() {
        $this->OpenConnect();
        $idUser=$this->id_usuario;
        $fechaFin=$this->fecha_fin;
        $fechaInicio=$this->fecha_inicio;
        $sql = "CALL spNuevaReserva($idUser,".$fechaInicio.",".$fechaFin.")";
        
        $result = $this->link->query($sql);

        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
     public function findReservasByIdUser() {
            $this->OpenConnect();
            $idUser=$this->id_usuario;
            $sql = "CALL spFindReservaByIdUser($idUser)";
            
            $result = $this->link->query($sql);
            while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
            {
                $newReserva=new reservasModel();
                $newReserva->setId($row['id']);
                $newReserva->setFecha_inicio($row['fecha_inicio']);
                $newReserva->setFecha_fin($row['fecha_fin']);
                $newReserva->setId_usuario($row['id_usuario']);
                
                $usuario= new usuariosModel();
                $usuario->setId($row['id_usuario']);
                $usuario->findUsuarioById();
                $newReserva->setObjectUsuario($usuario);
                
                array_push($this->list, $newReserva);
            }
            mysqli_free_result($result);
            $this->CloseConnect();
        }
    
    
    
    public function findReservaById() {
        $this->OpenConnect();
        $id=$this->id;
        $sql = "CALL spFindReservaById($id)";
        $result= $this->link->query($sql);
        
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            
            $this->setId($row['id']);
            $this->setFecha_inicio($row['fecha_inicio']);
            $this->setFecha_fin($row['fecha_fin']);
            $this->setId_usuario($row['id_usuario']);
            
            $usuario= new usuariosModel();
            $usuario->setId($row['id_usuario']);
            $usuario->findUsuarioById();
            $this->setObjectUsuario($usuario);
            
            array_push($this->list, $this);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    function getListReservasJson() {
        // returns the list of objects in a srting with JSON format
        $arr=array();
        
        foreach ($this->list as $object) {
            $vars = $object->getObjectVars();
            
            $objUsuario=$object->getObjectUsuario()->getObjectVars();
            $vars['objectUsuario']=$objUsuario;
            
            array_push($arr, $vars);
        }
        return json_encode($arr);
    }
}