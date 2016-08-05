<?php 
class Usuario
{
	private $idusuario;
	private $nombreusuario;
	private $correo;
	private $contrasena;
	
	public function setIdusuario($idusuario){
		$this->proyecto_urban_usuario_id = $idusuario;
	}

	public function getIdusuario(){
		return $this->proyecto_urban_usuario_id;
	}

	public function setNombre($nombreusuario){
		$this->nombre_usuario = $nombreusuario;
	}

	public function getNombre(){
		return $this->nombre_usuario;
	}

	public function setCorreo($correo){
		$this->correo = $correo;
	}

	public function getCorreo(){
		return $this->correo;
	}

	public function setClave($contrasena){
		$this->contrasena = $contrasena;
	}

	public function getClave(){
		return $this->contrasena;
	}

}

 ?>