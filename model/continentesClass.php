<?php


class continentesClass{
    protected $id;
    protected $nombre;
    
    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @param mixed $nombre
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
    
    
    
    
}

