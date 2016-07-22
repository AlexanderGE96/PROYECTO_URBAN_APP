<?php session_start(); ?>
<html>
	<head>
		<title>Formulario de Registro</title>
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
<div class="col-md-6">
		<h2>Login</h2>

		<form role="form" name="login" action="php/login.php" method="post">
		  <div class="form-group">
		    <label for="username">Nombre de usuario o email</label>
		    <input type="text" class="form-control" id="username" name="username" placeholder="Nombre de usuario">
		  </div>
		  <div class="form-group">
		    <label for="password">Contrase&ntilde;a</label>
		    <input type="password" class="form-control" id="password" name="password" placeholder="Contrase&ntilde;a">
		  </div>

		  <button type="submit" class="btn btn-default">Acceder</button>
		</form>
</div>
</div>
</div>
		<script src="js/valida_login.js"></script>
	</body>
</html>