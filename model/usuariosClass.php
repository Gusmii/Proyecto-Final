<?php


class usuariosClass{
    protected $id;
    protected $apodo;
    protected $nombre;
    protected $apellidos;
    protected $dni;
    protected $correo;
    protected $contrasenia;
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
    public function getApodo()
    {
        return $this->apodo;
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
    public function getApellidos()
    {
        return $this->apellidos;
    }

       /**
     * @return mixed
     */
    public function getDni()
    {
        return $this->dni;
    }

       /**
     * @return mixed
     */
    public function getCorreo()
    {
        return $this->correo;
    }

       /**
     * @return mixed
     */
    public function getContrasenia()
    {
        return $this->contrasenia;
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
    public function setApodo($apodo)
    {
        $this->apodo = $apodo;
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
    public function setApellidos($apellidos)
    {
        $this->apellidos = $apellidos;
    }

    /**
     * @param mixed 
     */
    public function setDni($dni)
    {
        $this->dni = $dni;
    }

    /**
     * @param mixed 
     */
    public function setCorreo($correo)
    {
        $this->correo = $correo;
    }

    /**
     * @param mixed 
     */
    public function setContrasenia($contrasenia)
    {
        $this->contrasenia = $contrasenia;
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

