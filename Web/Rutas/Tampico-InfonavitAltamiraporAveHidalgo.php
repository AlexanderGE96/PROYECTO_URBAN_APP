<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
        <link rel="stylesheet" href="../rl-php-master/estilo.css"/>
		<link rel="stylesheet" href="../rl-php-master/fonts.css"/>
</head>
    <header>
		<nav>
			<ul>
				<li><a href="index.php"><span class="primero"><i class="icon icon-home2"></i></span>Inicio</a></li>
				<li><a href="#"><span class="segundo"><i class="icon icon-map2"></i></span>Rutas</a>
					<ul>
						<li><a href="Tampico-ArboledaporAveHidalgo.php">Arboledas</a></li>
						<li><a href="../Rutas/Tampico-AztecaporAveHidalgo.php">Azteca</a></li>
						<li><a href="Tampico-Cuauhtemoc.php">Cuauhtemoc</a></li>
						<li><a href="Tampico-HaciendasporAvenidaHidalgo.php">Haciendas</a></li>
						<li><a href="Tampico-InfonavitAltamiraporAveHidalgo.php">Infonavit Altamira</a></li>
					</ul>
				</li>
				<li><a href="../Rutas/custom-directions-panel-google-maps-apiv3/directions.html"><span class="tercero"><i class="icon icon-location2"></i></span>Traza tu Ruta</a></li>
				 <?php if(!isset($_SESSION["user_id"])):?>
				<li><a href="../rl-php-master/login.php"><span class="cuarto"><i class="icon icon-user"></i></span>Iniciar Secion</a></li>
				<li><a href="../rl-php-master/registro.php"><span class="quinto"><i class="icon icon-user-plus"></i></span>Registrate</a></li>
                <?php else:?>
                <li><a href="../rl-php-master/home.php"><span class="quinto"><i class="icon icon-user-plus"></i></span>Cerrar Secion</a></li>
                <?php endif;?>
			</ul>
		</nav>
	</header>
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1murw3iua_JH3b3w7n-mEKhIRFhw" width="640" height="480"></iframe>

<body>
</body>
</html>