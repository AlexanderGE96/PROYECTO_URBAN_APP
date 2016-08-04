CREATE TABLE IF NOT EXISTS `proyecto_urban_rutas_paradas` (
  `proyecto_urban_rutas_parada_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `proyecto_urban_ruta_id` int(11) NOT NULL,
  PRIMARY KEY (`proyecto_urban_rutas_parada_id`),
  KEY `proyecto_urban_rutas_parada_id` (`proyecto_urban_rutas_parada_id`),
  KEY `proyecto_urban_ruta_id` (`proyecto_urban_ruta_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;