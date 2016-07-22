CREATE TABLE IF NOT EXISTS `proyecto_urban_mantenimiento` (
  `PROYECTO_URBAN_MANTENIMIENTO_ID` int(11) NOT NULL AUTO_INCREMENT,
  `FechaRegistro` datetime NOT NULL,
  `Liberacion` int(11) NOT NULL,
  `NumeroScript` int(11) NOT NULL,
  `Usuario` varchar(50) NOT NULL,
  `Comentarios` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`PROYECTO_URBAN_MANTENIMIENTO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
