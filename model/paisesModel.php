<?php

include_once "connect_data.php";
include_once 'paisesClass.php';
include_once 'ContinentesModel.php';


class paisesModel extends paisesClass{
    
    private $link;
    private $list=array();
    private $objectContinente;
    
    
    public function getObjectContinente()
    {
        return $this->objectContinente;
    }
    public function setObjectContinente($objectContinente)
    {
        $this->objectContinente = $objectContinente;
    }

    function getList(){
        return $this->list;
    }
    
    
    public function OpenConnect() {
        $konDat=new connect_data();
        try {
            $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
            // mysqli klaseko link objetua sortzen da dagokion konexio datuekin
            // se crea un nuevo objeto llamado link de la clase mysqli con los datos de conexión.
        }
        catch(Exception $e) {
            echo $e->getMessage();
        }
        $this->link->set_charset("utf8"); // honek behartu egiten du aplikazio eta
        //                  //databasearen artean UTF -8 erabiltzera datuak trukatzeko
    }
    
    public function CloseConnect() {
        mysqli_close ($this->link);
    }
    function setListPaises()  // fill country : $this->list
    {
        $this->OpenConnect();
        $sql="call spAllPaises()";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $newPais=new paisesModel();
            $newPais->setId($row['id']);
            $newPais->setNombre($row['nombre']);
            $newPais->setCodigo_continente($row['codigo_continente']);
            
            $continente= new continentesModel();
            $continente->setId($row['codigo_continente']);
            $continente->findContinenteById();
            $newPais->setObjectContinente($continente);
            
            array_push($this->list, $newPais);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function findPaisById() {
        $this->OpenConnect();
        $id=$this->id;
        $sql = "CALL spFindPaisById($id)";
        $result= $this->link->query($sql);
        
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $this->setId($row['id']);
            $this->setNombre($row['nombre']);
            $this->setCodigo_continente($row['codigo_continente']);
            
            $continente= new continentesModel();
            $continente->setId($row['codigo_continente']);
            $continente->findContinenteById();
            $this->setObjectContinente($continente);
            
            array_push($this->list, $this);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    function getListJsonString() {
        
        $arr=array();
        
        foreach ($this->list as $object) {
            $vars = get_object_vars($object);
            
            array_push($arr, $vars);
        }
        return json_encode($arr);
    }
    function getListPaisesJson() {
        // returns the list of objects in a srting with JSON format
        $arr=array();
        
        foreach ($this->list as $object) {
            $vars = $object->getObjectVars();
            
            $objContinente=$object->getObjectContinente()->getObjectVars();
            $vars['objectContinente']=$objContinente;
            array_push($arr, $vars);
        }
        return json_encode($arr);
    } 
    
    
    
}