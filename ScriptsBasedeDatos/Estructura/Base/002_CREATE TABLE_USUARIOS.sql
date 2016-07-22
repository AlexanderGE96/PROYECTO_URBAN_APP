CREATE TABLE IF NOT EXISTS `proyecto_urban_usuarios` (
  `PROYECTO_URBAN_USUARIO_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Completo` varchar(300) NOT NULL,
  `Nombre_Usuario` varchar(100) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Creado_el` datetime NOT NULL,
  PRIMARY KEY (`PROYECTO_URBAN_USUARIO_ID`),
  UNIQUE KEY `Nombre_Usuario` (`Nombre_Usuario`,`Email`),
  KEY `PROYECTO_URBAN_USUARIO_ID` (`PROYECTO_URBAN_USUARIO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;