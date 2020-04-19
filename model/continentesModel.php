<?php

include_once ("connect_data.php");
include_once 'continentesClass.php';


class continentesModel extends continentesClass{
    
    private $link;
    private $list=array();
    
    /**
     * @return multitype:
     */
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
    
    function setListContinentes()  // fill country : $this->list
    {
        $this->OpenConnect();
        $sql="call spAllContinentes()";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $newContinente=new continentesModel();
            $newContinente->setId($row['id']);
            $newContinente->setNombre($row['nombre']);
            
            array_push($this->list, $newContinente);
        }
        mysqli_free_result($result);
       $this->CloseConnect();
    }
    

    function getListContinentesJson()   // convert country : $this->list to JSON
    {
        // returns the list of objects in a srting with JSON format
        $arr=array();
        
        foreach ($this->list as $object)
        {
            $vars = $object->getObjectVars();
            
            array_push($arr, $vars);
        }
        return json_encode($arr);
    }
    

}


