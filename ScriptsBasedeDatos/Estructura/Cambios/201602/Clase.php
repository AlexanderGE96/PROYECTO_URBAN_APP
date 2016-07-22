<?php
class usuario{
	/*Atributos*/
	private $nombreusuario;
	private $constrasena;
	private $email;

	/*Constructor*/
	public function usuario($nombreusuario, $constrasena, $email){
		$this->NombreUsuario 	= $nombreusuario;
		$this->Constrasena 	= $constrasena;
		$this->email		= $email;
	}
	/*Metodo*/
	public function getnombreusuario(){
		return $this->NombreUsuario;
	}

	public function getcontraseña(){
		return $this->Constrasena;
	}

	public function getemail(){
		return $this->email;	
	}
}
?>	