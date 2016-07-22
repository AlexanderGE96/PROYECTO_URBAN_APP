<?php
session_start();
?>
<html>
	<head>
		<title>.: Urban Tampico WEB :.</title>
		<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="estilo.css" />
		<link rel="stylesheet" href="fonts.css" />
	</head>
	<body>
    <header>
		<nav>
			<ul>
				<li><a href="index.php"><span class="primero"><i class="icon icon-home2"></i></span>Inicio</a></li>
				<li><a href="#"><span class="segundo"><i class="icon icon-map2"></i></span>Rutas</a>
					<ul>
						<li><a href="../Rutas/Tampico-ArboledaporAveHidalgo.php">Arboledas</a></li>
						<li><a href="../Rutas/Tampico-AztecaporAveHidalgo.php">Azteca</a></li>
						<li><a href="../Rutas/Tampico-Cuauhtemoc.php">Cuauhtemoc</a></li>
						<li><a href="../Rutas/Tampico-HaciendasporAvenidaHidalgo.php">Haciendas</a></li>
						<li><a href="../Rutas/Tampico-InfonavitAltamiraporAveHidalgo.php">Infonavit Altamira</a></li>
					</ul>
				</li>
				<li><a href="../Rutas/custom-directions-panel-google-maps-apiv3/directions.html"><span class="tercero"><i class="icon icon-location2"></i></span>Traza tu Ruta</a></li>
				 <?php if(!isset($_SESSION["user_id"])):?>
				<li><a href="login.php"><span class="cuarto"><i class="icon icon-user"></i></span>Iniciar Secion</a></li>
				<li><a href="registro.php"><span class="quinto"><i class="icon icon-user-plus"></i></span>Registrate</a></li>
                <?php else:?>
                <li><a href="home.php"><span class="quinto"><i class="icon icon-user-plus"></i></span>Cerrar Secion</a></li>
                <?php endif;?>
			</ul>
		</nav>
	</header>

	<div class="container">
	<div class="row">
	<div class="col-md-12">
			<h2>REGISTRO Y LOGIN BASICO</h2>
			<p class="lead">Sistema de Registro y Login Sencillo con PHP y MySQL</p>
			<p>Les presento <b>rl-php</b> un sistema de registro y login sencillo.</p>
			<p>Instrucciones:</p>
			<ol>
				<li>Registrate en la opcion de registro.</li>
				<li>Inicie sesion en la opcion de login.</li>
				<li>Para finalizar la sesion, click en la opcion salir .</li>
			</ol>
			<br>
			<ul type="none">
			<li><i class="glyphicon glyphicon-ok"></i> Facil de instalar y modificar</li>
			<li><i class="glyphicon glyphicon-ok"></i> Ideal para tu proximo proyecto web</li>
			</ul>

	</div>
	</div>
	</div>
	</body>
</html>