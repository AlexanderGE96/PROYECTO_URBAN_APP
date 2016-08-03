CREATE TABLE IF NOT EXISTS `proyecto_urban_mantenimiento` (
  `proyecto_urban_mantenimiento_id` int(11) NOT NULL AUTO_INCREMENT,
  `fecharegistro` datetime NOT NULL,
  `liberacion` int(11) NOT NULL,
  `numeroscript` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `comentarios` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`proyecto_urban_mantenimiento_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
