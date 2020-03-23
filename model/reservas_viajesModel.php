<?php

include_once "connect_data.php";
include_once 'reservas_viajesClass.php';


class reservas_viajesModel extends reservas_viajesClass{
    
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

}
