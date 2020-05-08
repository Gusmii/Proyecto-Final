<?php


class tipo_usuariosClass{
    protected $id;
    protected $tipo;

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
    public function getTipo()
    {
        return $this->tipo;
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
    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }

    
    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
    

 
}

