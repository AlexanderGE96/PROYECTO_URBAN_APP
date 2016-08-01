<?php 
class Usuario
{
	private $idusuario;
	private $nombreusuario;
	private $correo;
	private $contrasena;
	
	public function setIdusuario($idusuario){
		$this->idusuario = $idusuario;
	}

	public function getIdusuario(){
		return $this->idusuario;
	}

	public function setNombre($nombreusuario){
		$this->nombreusuario = $nombreusuario;
	}

	public function getNombre(){
		return $this->nombreusuario;
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