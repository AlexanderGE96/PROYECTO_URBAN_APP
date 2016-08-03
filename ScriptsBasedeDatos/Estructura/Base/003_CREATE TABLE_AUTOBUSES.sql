CREATE TABLE IF NOT EXISTS `proyecto_urban_autobuses` (
  `proyecto_urban_autobuses_id` int(11) NOT NULL AUTO_INCREMENT,
  `modelo` varchar(50) NOT NULL,
  `año` int(11) NOT NULL,
  `capacidad` int(11) NOT NULL,
  PRIMARY KEY (`proyecto_urban_autobuses_id`),
  KEY `proyecto_urban_autobuses_id` (`proyecto_urban_autobuses_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;