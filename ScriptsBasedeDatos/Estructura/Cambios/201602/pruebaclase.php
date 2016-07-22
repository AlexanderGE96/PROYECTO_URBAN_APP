<?php
require(Clase.php);
$chronos = new Clase("AlexGE", 12345, "alex@gmail.com");

echo "<h1>".$chronos->getnombreusuario()."</h1>";
echo "Correo Electronico: ".$chronos->getemail();
?>