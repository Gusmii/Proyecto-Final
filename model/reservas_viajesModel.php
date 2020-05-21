<?php

include_once "connect_data.php";
include_once 'reservas_viajesClass.php';
include_once 'reservasModel.php';
include_once 'vuelosModel.php';


class reservas_viajesModel extends reservas_viajesClass{
    
    private $link;
    private $list=array();
    private $objectVuelo;
    private $objectReserva;
    
    
    
    
    
    public function getObjectVuelo()
    {
        return $this->objectVuelo;
    }
    
   
    public function setObjectVuelo($objectVuelo)
    {
        $this->objectVuelo = $objectVuelo;
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
    
    
    
    function setNuevoViajeReserva()  // fill country : $this->list
    {
        $this->OpenConnect();
        $idViaje=$this->id_viaje;
        $idReserva=$this->id_reserva;
        
        $sql="call spNuevaReservas_viajes($idReserva,$idViaje)";
        
        $result = $this->link->query($sql);

//         mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    function setListReservas_viajes()  // fill country : $this->list
    {
        $this->OpenConnect();
        $sql="call spAllReservas_viajes()";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $newVuelo=new reservas_viajesModel();
            $newVuelo->setId_reserva($row['id_reserva']);
            $newVuelo->setId_viaje($row['id_viaje']);
            
            $vuelo= new vuelosModel();
            $vuelo->setId($row['id_viaje']);
            $vuelo->findVueloById();
            $newVuelo->setObjectVuelo($vuelo);
            
            $reserva= new reservasModel();
            $reserva->setId($row['id_reserva']);
            $reserva->findReservaById();
            $newVuelo->setObjectReserva($reserva);
            
            
            array_push($this->list, $newVuelo);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    function getListReservas_viajesJson() {
        // returns the list of objects in a srting with JSON format
        $arr=array();
        
        foreach ($this->list as $object) {
            $vars = $object->getObjectVars();
            
            $objVuelo=$object->getObjectVuelo()->getObjectVars();
            $vars['objectVuelo']=$objVuelo;
            
            $objReserva=$object->getObjectReserva()->getObjectVars();
            $vars['objectReserva']=$objReserva;
            
            array_push($arr, $vars);
        }
        return json_encode($arr);
    }
}
