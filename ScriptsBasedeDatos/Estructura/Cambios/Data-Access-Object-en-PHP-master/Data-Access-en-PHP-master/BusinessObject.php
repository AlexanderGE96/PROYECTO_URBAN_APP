<?php 
/**
 * Business Oject
 * */
include("DAO/UsuarioDAO.php");
/**
 * Se crea la instancia del Objeto.
 * */
$dao = new UsuarioDAO();
/**
 * Traer todos lo registros de la tabla Usuario.
 * */
$dao->selectUsuarios();
/**
 * Crear un Objeto de tipo Usuario.
 * */
$usuario = new Usuario();
$usuario->setIdusuario(1);
$usuario->setNombre("Daniel");
$usuario->setCorreo("daniel_brena@outlook.com");
$usuario->setContrasena("daniel12345");
/**
 * Inserta usuario en la Base de Datos.
 * */
echo $dao->insertUsuario($usuario);
/**
 * Actualiza el usuario en la Base de Datos.
 * */
echo $dao->updateUsuario($usuario);
/**
 * Buscar un usuario dentro de la Base de Datos.
 * con el correo y la clave.
 * */
$dao->searchUsuario("daniel_brena@outlook.com","daniel12345");
/**
 * Elimina el usuario por medio del id.
 * */
echo $dao->deleteUsuario(1);

?>