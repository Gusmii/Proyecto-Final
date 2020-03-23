<?php


class reservas_viajesClass{
    protected $id_reserva;
    protected $id_viaje;

    

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
    public function getId_viaje()
    {
        return $this->id_viaje;
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
    public function setId_viaje($id_viaje)
    {
        $this->id_viaje = $id_viaje;
    }
    
    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
    

 
}

