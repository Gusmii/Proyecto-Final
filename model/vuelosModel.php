<?php

include_once "connect_data.php";
include_once 'vuelosClass.php';
include_once 'ciudadesModel.php';

class vuelosModel extends vuelosClass{
    
    private $link;
    private $list=array();

    private $objectUbicacion;
    


        /**
     * @param mixed $objectUbicacion
     */
    public function setObjectUbicacion($objectUbicacion)
    {
        $this->objectUbicacion = $objectUbicacion;
    }

        /**
     * @return mixed
     */
    public function getObjectUbicacion()
    {
        return $this->objectUbicacion;
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

    function setListVuelos()  // fill country : $this->list
    {
        $this->OpenConnect();
        $sql="call spAllVuelos()";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            
            $this->setId($row['id']);
            $this->setPrecio($row['precio']);
            $this->setUbicacion($row['ubicacion']);
            
            
            $ciudad= new ciudadesModel();
            $ciudad->setId($row['ubicacion']);
            $ciudad->findCiudadById();
            $this->setObjectUbicacion($ciudad);
            
            
            array_push($this->list, $this);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }

    function getListVuelosJson() {
        // returns the list of objects in a srting with JSON format
        $arr=array();
        
        foreach ($this->list as $object) {
            $vars = $object->getObjectVars();
            
            $objUbicacion=$object->getObjectUbicacion()->getObjectVars();
            $vars['objectUbicacion']=$objUbicacion;
            
            array_push($arr, $vars);
        }
        return json_encode($arr);
    }

}

