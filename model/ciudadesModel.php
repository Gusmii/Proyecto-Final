<?php
include_once "connect_data.php";
include_once 'ciudadesClass.php';
include_once 'continentesModel.php';
include_once 'paisesModel.php';


class ciudadesModel extends ciudadesClass{
    
    private $link;
    private $list=array();
    
    private $objectPais;
    private $objectContinente;
    
    /**
     * @return mixed
     */
    public function getObjectPais()
    {
        return $this->objectPais;
    }
    
    /**
     * @return mixed
     */
    public function getObjectContinente()
    {
        return $this->objectContinente;
    }
    
    /**
     * @param mixed $objectPais
     */
    public function setObjectPais($objectPais)
    {
        $this->objectPais = $objectPais;
    }
    
    /**
     * @param mixed $objectContinente
     */
    public function setObjectContinente($objectContinente)
    {
        $this->objectContinente = $objectContinente;
    }
    public function getList()
    {
        return $this->list;
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
        try
        {
            $this->link->close();
        }
        catch(Exception $e)
        {
            echo $e->getMessage();
        }
    }
    
    function setListCiudades()  // fill country : $this->list
    {
        $this->OpenConnect();
        $sql="call spAllCiudades()";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $newCiudad=new ciudadesModel();
            $newCiudad->setId($row['id']);
            $newCiudad->setNombre($row['nombre']);
            $newCiudad->setCodigo_pais($row['codigo_pais']);
            $newCiudad->setCodigo_continente($row['codigo_continente']);
            
            $pais= new paisesModel();
            $pais->setId($row['codigo_pais']);
            $pais->findPaisById();
            $newCiudad->setObjectPais($pais);
            
            $continente= new continentesModel();
            $continente->setId($row['codigo_continente']);
            $continente->findContinenteById();
            $newCiudad->setObjectContinente($continente);
            
            array_push($this->list, $newCiudad);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function findCiudadById() {
        $this->OpenConnect();
        $id=$this->id;
        $sql = "CALL spFindCiudadById($id)";
        $result= $this->link->query($sql);
        
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $this->setId($row['id']);
            $this->setNombre($row['nombre']);
            $this->setCodigo_pais($row['codigo_pais']);
            $this->setCodigo_continente($row['codigo_continente']);
            
            $pais= new paisesModel();
            $pais->setId($row['codigo_pais']);
            $pais->findPaisById();
            $this->setObjectPais($pais);
            
            $continente= new continentesModel();
            $continente->setId($row['codigo_continente']);
            $continente->findContinenteById();
            $this->setObjectContinente($continente);
            
            array_push($this->list, $this);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    

    function getListCiudadesJson() {
        // returns the list of objects in a srting with JSON format
        $arr=array();
        
        foreach ($this->list as $object) {
            $vars = $object->getObjectVars();
            
            $objPais=$object->getObjectPais()->getObjectVars();
            $vars['objectPais']=$objPais;
            
            $objContinente=$object->getObjectContinente()->getObjectVars();
            $vars['objectContinente']=$objContinente;
            array_push($arr, $vars);
        }
        return json_encode($arr);
    } 
}

