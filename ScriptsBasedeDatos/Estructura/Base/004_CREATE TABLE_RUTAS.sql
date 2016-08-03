CREATE TABLE IF NOT EXISTS `proyecto_urban_rutas` (
  `proyecto_urban_rutas_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_ruta` varchar(100) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  PRIMARY KEY (`proyecto_urban_rutas_id`),
  KEY `proyecto_urban_rutas_id` (`proyecto_urban_rutas_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;