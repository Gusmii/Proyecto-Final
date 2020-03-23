<?php


class reservasClass{
    protected $id;
    protected $id_usuario;
    protected $fecha_inicio;
    protected $fecha_fin;


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
    public function getId_usuario()
    {
        return $this->id_usuario;
    }

    /**
     * @return mixed
     */
    public function getFecha_inicio()
    {
        return $this->Fecha_inicio;
    }

    /**
     * @return mixed
     */
    public function getFecha_fin()
    {
        return $this->fecha_fin;
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
    public function setId_usuario($id_usuario)
    {
        $this->id_usuario = $id_usuario;
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
    
    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }

   
    
    
}

