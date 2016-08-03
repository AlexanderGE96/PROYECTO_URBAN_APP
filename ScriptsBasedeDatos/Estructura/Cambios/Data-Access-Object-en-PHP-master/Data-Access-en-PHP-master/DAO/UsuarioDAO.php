<?php 
require_once ($_SERVER['DOCUMENT_ROOT']."/AlexGEE/ProyectoUrban/DB/DA/IUsuario.php");
require_once ($_SERVER['DOCUMENT_ROOT']."/AlexGEE/ProyectoUrban/DB/DA/DataSource.php");
require_once ($_SERVER['DOCUMENT_ROOT']."/AlexGEE/ProyectoUrban/DB/DA/Usuario.php");
class UsuarioDAO implements IUsuario
{
	public function selectUsuarios(){

		$data_source = new DataSource();
		$data_table = $data_source->ejecutarConsulta("SELECT * FROM proyecto_urban_usuarios");
		$usuario = null;
		$usuarios = array();

		foreach ($data_table as $contrasena => $valor) {
			$usuario = new Usuario();
			$usuario->setIdusuario( $data_table[$contrasena]["proyecto_urban_usuario_id"] );
			$usuario->setNombre( $data_table[$contrasena]["nombre_Usuario"] );
			$usuario->secontrasena( $data_table[$contrasena]["contraseña"] );
			$usuario->setCorreo( $data_table[$contrasena]["correo"] );

			array_push($usuarios, $usuario);
		}
		return $usuarios;
	}

	public function selectUsuarioById($id){
		$data_source = new DataSource();
		$data_table = $data_source->ejecutarConsulta("SELECT * FROM usuario WHERE proyecto_urban_usuario_id = :idusuario",array(
			':idusuario'=>$id));
		$usuario = null;

		if(count($data_table) == 1){

			foreach ($data_table as $contrasena => $valor) {
				$usuario = new Usuario();
			$usuario = new Usuario();
			$usuario->setIdusuario( $data_table[$contrasena]["proyecto_urban_usuario_id"] );
			$usuario->setNombre( $data_table[$contrasena]["nombre_Usuario"] );
			$usuario->secontrasena( $data_table[$contrasena]["contraseña"] );
			$usuario->setCorreo( $data_table[$contrasena]["correo"] );

			}
			return $usuario;
		}else{
			return null;
		}
	}
	
	public function searchUsuario($correo, $contrasena){
		$data_source = new DataSource();
		$data_table = $data_source->ejecutarConsulta("SELECT * FROM usuario WHERE correo = :correo AND contrasena = :contrasena",
			array(':correo'=>$correo,':contrasena'=>$contrasena));

		if(count($data_table) == 1){

			foreach ($data_table as $contrasena => $valor) {
				$usuario = new Usuario();
			$usuario = new Usuario();
			$usuario->setIdusuario( $data_table[$contrasena]["proyecto_urban_usuario_id"] );
			$usuario->setNombre( $data_table[$contrasena]["nombre_Usuario"] );
			$usuario->secontrasena( $data_table[$contrasena]["contraseña"] );
			$usuario->setCorreo( $data_table[$contrasena]["correo"] );

			array_push($usuarios, $usuario);
			}
			return $usuario;
		}else{
			return null;
		}
	}

	public function insertUsuario(Usuario $usuario){
		$data_source = new DataSource();

		$sql = "INSERT INTO usuario VALUES (:idusuario,:nombreusuario, :correo, :contraseña)";

		$resultado = $data_source->ejecutarActualizacion($sql,array(
			':idusuario'=>$usuario->getIdusuario(),
			':nombreusuario'=>$usuariousuario->getNombre(),
			':contraseña'=>$contrasena->getContrasena(),
			':correo'=>$usuario->getCorreo(),
			)
		);
		return $resultado;
		
	}

	public function updateUsuario(Usuario $usuario){
		$data_source = new DataSource();
		$sql = "UPDATE usuario SET nombre_Usuario = :nombreusuario,
				correo = :correo
				WHERE proyecto_urban_usuario_id = :idusuario
				";
		$resultado = $data_source->ejecutarActualizacion($sql,array(
			':idusuario'=>$usuario->getIdusuario(),
			':nombreusuario'=>$usuariousuario->getNombre(),
			':contraseña'=>$contrasena->getContrasena(),
			':correo'=>$usuario->getCorreo(),
			)
		);
		return $resultado;
	}

	public function deleteUsuario($id){
		$data_source = new DataSource();
		$resultado = $data_source->ejecutarActualizacion("DELETE FROM usuario WHERE proyecto_urban_usuario_id = :idusuario",
			array(':idusuario'=>$id));
		return $resultado;
	}

}

 ?>