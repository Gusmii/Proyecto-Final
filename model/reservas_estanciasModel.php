<?php

include_once "connect_data.php";
include_once 'reservas_estanciasClass.php';
include_once 'reservasModel.php';
include_once 'estanciasModel.php';

class reservas_estanciasModel extends reservas_estanciasClass{
    
    private $link;
    private $list=array();
    private $objectEstancia;
    private $objectReserva;
    
    
    
    
    
    public function getObjectEstancia()
    {
        return $this->objectEstancia;
    }
    
    
    public function setObjectEstancia($objectEstancia)
    {
        $this->objectEstancia = $objectEstancia;
    }
    
    
    public function getObjectReserva()
    {
        return $this->objectReserva;
    }
    
    
    public function setObjectReserva($objectReserva)
    {
        $this->objectReserva = $objectReserva;
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
    
    
    function setNuevaEstanciaReserva()  // fill country : $this->list
    {
        $this->OpenConnect();
        $idEstancia=$this->id_estancia;
        $idReserva=$this->id_reserva;
        $fechaInicio=$this->fecha_inicio;
        
        $sql="call spNuevaReservas_estancias($idReserva,$idEstancia,'$fechaInicio')";
        
        $result = $this->link->query($sql);

//         mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    function setListReservas_estancias()  // fill country : $this->list
    {
        $this->OpenConnect();
        $sql="call spAllReservas_estancias()";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $newEstancia=new reservas_estanciasModel();
            $newEstancia->setId_reserva($row['id_reserva']);
            $newEstancia->setId_estancia($row['id_estancia']);
            
            $Estancia= new EstanciasModel();
            $Estancia->setId($row['id_estancia']);
            $Estancia->findEstanciaById();
            $newEstancia->setObjectEstancia($Estancia);
            
            $reserva= new reservasModel();
            $reserva->setId($row['id_reserva']);
            $reserva->findReservaById();
            $newEstancia->setObjectReserva($reserva);
            
            
            array_push($this->list, $newEstancia);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    function getListReservas_estanciasJson() {
        // returns the list of objects in a srting with JSON format
        $arr=array();
        
        foreach ($this->list as $object) {
            $vars = $object->getObjectVars();
            
            $objEstancia=$object->getObjectEstancia()->getObjectVars();
            $vars['objectEstancia']=$objEstancia;
            
            $objReserva=$object->getObjectReserva()->getObjectVars();
            $vars['objectReserva']=$objReserva;
            
            array_push($arr, $vars);
        }
        return json_encode($arr);
    }

}

