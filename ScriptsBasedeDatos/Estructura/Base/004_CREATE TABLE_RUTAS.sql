CREATE TABLE IF NOT EXISTS `proyecto_urban_rutas` (
  `PROYECTO_URBAN_RUTA_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Ruta` varchar(100) NOT NULL,
  `Tipo` varchar(50) NOT NULL,
  PRIMARY KEY (`proyecto_urban_ruta_id`),
  KEY `proyecto_urban_rutas` (`proyecto_urban_rutas`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;