<?php
    
include_once "connect_data.php";
include_once 'estanciasClass.php';
include_once 'tipo_estanciasModel.php';
include_once 'ciudadesModel.php'; 


class estanciasModel extends estanciasClass{
    private $link;
    private $list=array();
    
    private $objectTipoEstancia;
    private $objectUbicacion;
    
    
    
    /**
     * @return mixed
     */
    public function getObjectTipoEstancia()
    {
        return $this->objectTipoEstancia;
    }

    /**
     * @return mixed
     */
    public function getObjectUbicacion()
    {
        return $this->objectUbicacion;
    }

    /**
     * @param mixed $objectTipoEstancia
     */
    public function setObjectTipoEstancia($objectTipoEstancia)
    {
        $this->objectTipoEstancia = $objectTipoEstancia;
    }

    /**
     * @param mixed $objectUbicacion
     */
    public function setObjectUbicacion($objectUbicacion)
    {
        $this->objectUbicacion = $objectUbicacion;
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
    
    function setListEstancias()  // fill country : $this->list
    {
        $this->OpenConnect();
        $sql="call spAllEstancias()";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $newEstancia=new estanciasModel();
            $newEstancia->setId($row['id']);
            $newEstancia->setNombre($row['nombre']);
            $newEstancia->setPrecio($row['precio']);
            $newEstancia->setPuntuacion($row['puntuacion']);
            $newEstancia->setImagen($row['imagen']);
            $newEstancia->setUbicacion($row['ubicacion']);
            $newEstancia->setTipo($row['tipo']);
            
            
            $ciudad= new ciudadesModel();
            $ciudad->setId($row['ubicacion']);
            $ciudad->findCiudadById();
            $newEstancia->setObjectUbicacion($ciudad);
            
            $tipo= new tipo_estanciasModel();
            $tipo->setId($row['tipo']);
            $tipo->findTipoById();
            $newEstancia->setObjectTipoEstancia($tipo);
            
            array_push($this->list, $newEstancia);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    function filtrarEstancias($nombreFiltro)  // fill country : $this->list
    {
        $this->OpenConnect();
        $sql="call spFiltrarEstancias($nombreFiltro)";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $newEstancia=new estanciasModel();
            $newEstancia->setId($row['id']);
            $newEstancia->setNombre($row['nombre']);
            $newEstancia->setPrecio($row['precio']);
            $newEstancia->setPuntuacion($row['puntuacion']);
            $newEstancia->setImagen($row['imagen']);
            $newEstancia->setUbicacion($row['ubicacion']);
            $newEstancia->setTipo($row['tipo']);
            
            
            $ciudad= new ciudadesModel();
            $ciudad->setId($row['ubicacion']);
            $ciudad->findCiudadById();
            $newEstancia->setObjectUbicacion($ciudad);
            
            $tipo= new tipo_estanciasModel();
            $tipo->setId($row['tipo']);
            $tipo->findTipoById();
            $newEstancia->setObjectTipoEstancia($tipo);
            
            array_push($this->list, $newEstancia);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    function getListEstanciasJson() {
        // returns the list of objects in a srting with JSON format
        $arr=array();
        
        foreach ($this->list as $object) {
            $vars = $object->getObjectVars();
            
            $objUbicacion=$object->getObjectUbicacion()->getObjectVars();
            $vars['objectUbicacion']=$objUbicacion;
            
            $objTipoEstancia=$object->getObjectTipoEstancia()->getObjectVars();
            $vars['objectTipoEstancia']=$objTipoEstancia;
            array_push($arr, $vars);
        }
        return json_encode($arr);
    } 
}


