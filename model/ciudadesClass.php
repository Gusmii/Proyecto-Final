<?php


class ciudadesClass{
    protected $id;
    protected $nombre;
    protected $codigo_pais;
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

    /**
     * @return mixed
     */
    public function getCodigo_pais()
    {
        return $this->codigo_pais;
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
    public function setCodigo_pais($codigo_pais)
    {
        $this->codigo_pais = $codigo_pais;
    }

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

