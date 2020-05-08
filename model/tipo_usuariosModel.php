<?php

include_once "connect_data.php";
include_once 'tipo_usuariosClass.php';


class tipo_usuariosModel extends tipo_usuariosClass{
    
    private $link;
    private $list=array();
    

    
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
    
    public function findTipoUsuarioById() {
        $this->OpenConnect();
        $id=$this->id;
        $sql = "CALL spFindTipoUsuarioById($id)";
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
    function getListTipoUsuariosJson()   // convert country : $this->list to JSON
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

