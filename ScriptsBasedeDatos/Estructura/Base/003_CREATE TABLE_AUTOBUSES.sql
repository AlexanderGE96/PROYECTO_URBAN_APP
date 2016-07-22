CREATE TABLE IF NOT EXISTS `proyecto_urban_autobuses` (
  `PROYECTO_URBAN_AUTOBUS_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Modelo` varchar(50) NOT NULL,
  `Año` int(11) NOT NULL,
  `Capacidad` int(11) NOT NULL,
  PRIMARY KEY (`PROYECTO_URBAN_AUTOBUS_ID`),
  KEY `PROYECTO_URBAN_AUTOBUS_ID` (`PROYECTO_URBAN_AUTOBUS_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;