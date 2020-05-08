<?php

include_once "connect_data.php";
include_once 'tipo_estanciasClass.php';


class tipo_estanciasModel extends tipo_estanciasClass{
    
    private $link;
    private $list=array();
 
   
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
    
    
    public function findTipoById() {
        $this->OpenConnect();
        $id=$this->id;
        $sql = "CALL spFindTipoById($id)";
        $result= $this->link->query($sql);
        
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $this->setId($row['id']);
            $this->setTipo($row['tipo']);
            
            array_push($this->list, $this);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    
    function getListTipoJson() {
        // returns the list of objects in a srting with JSON format
        $arr=array();
        
        foreach ($this->list as $object) {
            $vars = $object->getObjectVars();
            
            array_push($arr, $vars);
        }
        return json_encode($arr);
    } 

}

