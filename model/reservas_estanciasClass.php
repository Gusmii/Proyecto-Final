<?php


class reservas_estanciasClass{
    protected $id_reserva;
    protected $id_estancia;
    protected $fecha_inicio;
    protected $fecha_fin;

    /**
     * @return mixed
     */
    public function getId_reserva()
    {
        return $this->id_reserva;
    }

     /**
     * @return mixed
     */
    public function getId_estancia()
    {
        return $this->id_estancia;
    }

       /**
     * @return mixed
     */
    public function getFecha_inicio()
    {
        return $this->fecha_inicio;
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
    public function setId_reserva($id_reserva)
    {
        $this->id_reserva = $id_reserva;
    }

    /**
     * @param mixed 
     */
    public function setId_estancia($id_estancia)
    {
        $this->id_estancia = $id_estancia;
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

