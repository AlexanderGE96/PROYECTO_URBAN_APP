CREATE TABLE IF NOT EXISTS `proyecto_urban_rutas_puntos` (
  `proyecto_urban_rutas_puntos_id` int(11) NOT NULL AUTO_INCREMENT,
  `latitud` float NOT NULL,
  `longitud` float NOT NULL,
  PRIMARY KEY (`proyecto_urban_rutas_puntos_id`),
  KEY `proyecto_urban_rutas_puntos_id` (`proyecto_urban_rutas_puntos_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;