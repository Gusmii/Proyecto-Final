<?php


class paisesClass{
    protected $id;
    protected $nombre;
    protected $codigo_continente;
    
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

    public function getCodigo_continente()
    {
        return $this->codigo_continente;
    }

    /**
     * @param mixed 
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @param mixed 
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    /**
     * @param mixed 
     */
    public function setCodigo_continente($codigo_continente)
    {
        $this->codigo_continente = $codigo_continente;
    }

    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
    
    
    
    
}

