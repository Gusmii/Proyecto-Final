<?php


class vuelosClass{
    protected $id;
    protected $precio;
    protected $ubicacion;

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
    public function getPrecio()
    {
        return $this->precio;
    }

       /**
     * @return mixed
     */
    public function getUbicacion()
    {
        return $this->ubicacion;
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
  
    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
    

 
}

