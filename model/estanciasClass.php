<?php


class estanciasClass{
    protected $id;
    protected $nombre;
    protected $tipo;
    protected $precio;
    protected $ubicacion;
    protected $fecha_inicio;
    protected $fecha_fin;
    protected $puntuacion;
 
    
    
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
    public function getTipo()
    {
        return $this->tipo;
    }

    public function getPrecio()
    {
        return $this->precio;
    }

    public function getUbicacion()
    {
        return $this->ubicacion;
    }

    public function getFecha_inicio()
    {
        return $this->fecha_inicio;
    }

    public function getFecha_fin()
    {
        return $this->fecha_fin;
    }

    public function getPuntuacion()
    {
        return $this->puntuacion;
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
    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }

    /**
     * @param mixed 
     */
    public function setPrecio($precio)
    {
        $this->precio = $precio;
    }

    /**
     * @param mixed 
     */
    public function setUbicacion($ubicacion)
    {
        $this->ubicacion = $ubicacion;
    }

    /**
     * @param mixed 
     */
    public function setFecha_inicio($fecha_inicio)
    {
        $this->fecha_inicio = $fecha_inicio;
    }

    /**
     * @param mixed 
     */
    public function setFecha_fin($fecha_fin)
    {
        $this->fecha_fin = $fecha_fin;
    }

    /**
     * @param mixed 
     */
    public function setPuntuacion($puntuacion)
    {
        $this->puntuacion = $puntuacion;
    }

    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
    
    
    
    
}

