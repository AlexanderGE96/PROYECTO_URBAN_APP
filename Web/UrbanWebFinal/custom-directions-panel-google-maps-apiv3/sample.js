/**
 * @author Giri Jeedigunta
 * Visit: http://thewebstorebyg.wordpress.com/ for more tutorials on maps
 */
(function(mapDemo, $, undefined) {
	mapDemo.Directions = (function() {
		function _Directions() {
			var map,   
				directionsService, directionsDisplay, 
				autoSrc, autoDest, pinA, pinB, 
				R1P01, R1P02, R1P03, R1P04, R1P05, R1P06, R1P07, R1P08, R1P08, R1P09, R1P10,
				
				markerA = new google.maps.MarkerImage('source.png',
						new google.maps.Size(24, 27),
						new google.maps.Point(0, 0),
						new google.maps.Point(12, 27)),		
				markerB = new google.maps.MarkerImage('destination.png',
						new google.maps.Size(24, 28),
						new google.maps.Point(0, 0),
						new google.maps.Point(12, 28)),
				markerR1 = new google.maps.MarkerImage('r1.png',
						new google.maps.Size(24, 28),
						new google.maps.Point(0, 0),
						new google.maps.Point(12, 28)),
				markerR2 = new google.maps.MarkerImage('r2.png',
						new google.maps.Size(24, 28),
						new google.maps.Point(0, 0),
						new google.maps.Point(12, 28)),
				markerR3 = new google.maps.MarkerImage('r3.png',
						new google.maps.Size(24, 28),
						new google.maps.Point(0, 0),
						new google.maps.Point(12, 28)),
				markerR4 = new google.maps.MarkerImage('r4.png',
						new google.maps.Size(24, 28),
						new google.maps.Point(0, 0),
						new google.maps.Point(12, 28)),
				markerR5 = new google.maps.MarkerImage('r5.png',
						new google.maps.Size(24, 28),
						new google.maps.Point(0, 0),
						new google.maps.Point(12, 28)),
				// Caching the Selectors		
				$Selectors = {
					mapCanvas: jQuery('#mapCanvas')[0], 
					dirPanel: jQuery('#directionsPanel'),
					dirInputs: jQuery('.directionInputs'),
					dirSrc: jQuery('#dirSource'),
					dirDst: jQuery('#dirDestination'),
					getDirBtn: jQuery('#getDirections'),
					dirSteps: jQuery('#directionSteps'), 
					paneToggle: jQuery('#paneToggle'), 
					useGPSBtn: jQuery('#useGPS'), 
					paneResetBtn: jQuery('#paneReset')
				},
				
				autoCompleteSetup = function() {
					autoSrc = new google.maps.places.Autocomplete($Selectors.dirSrc[0]);
					autoDest = new google.maps.places.Autocomplete($Selectors.dirDst[0]);
				}, // autoCompleteSetup Ends
			
				directionsSetup = function() {
					directionsService = new google.maps.DirectionsService();
					directionsDisplay = new google.maps.DirectionsRenderer({
						suppressMarkers: true
					});	
					
					directionsDisplay.setPanel($Selectors.dirSteps[0]);											
				}, // direstionsSetup Ends
				
				trafficSetup = function() {					
					// Creating a Custom Control and appending it to the map
					var controlDiv = document.createElement('div'), 
						controlUI = document.createElement('div'), 
						trafficLayer = new google.maps.TrafficLayer();
							
					jQuery(controlDiv).addClass('gmap-control-container').addClass('gmnoprint');
					jQuery(controlUI).text('Traffic').addClass('gmap-control');
					jQuery(controlDiv).append(controlUI);				
							
					// Traffic Btn Click Event	  
					google.maps.event.addDomListener(controlUI, 'click', function() {
						if (typeof trafficLayer.getMap() == 'undefined' || trafficLayer.getMap() === null) {
							jQuery(controlUI).addClass('gmap-control-active');
							trafficLayer.setMap(map);
						} else {
							trafficLayer.setMap(null);
							jQuery(controlUI).removeClass('gmap-control-active');
						}
					});							  
					map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv);								
				}, // trafficSetup Ends
				
				mapSetup = function() {					
					map = new google.maps.Map($Selectors.mapCanvas, {
							zoom: 12,
							center: new google.maps.LatLng(22.219361, -97.862272),	
							
		                    mapTypeControl: true,
		                    mapTypeControlOptions: {
		                        style: google.maps.MapTypeControlStyle.DEFAULT,
		                        position: google.maps.ControlPosition.TOP_RIGHT
		                    },
		
		                    panControl: true,
		                    panControlOptions: {
		                        position: google.maps.ControlPosition.RIGHT_TOP
		                    },
		
		                    zoomControl: true,
		                    zoomControlOptions: {
		                        style: google.maps.ZoomControlStyle.LARGE,
		                        position: google.maps.ControlPosition.RIGHT_TOP
		                    },
		                    
		                    scaleControl: true,
							streetViewControl: true, 
							overviewMapControl: true,
							 							
							mapTypeId: google.maps.MapTypeId.ROADMAP
					});
					
					autoCompleteSetup();
					directionsSetup();
					trafficSetup();
				}, // mapSetup Ends 
				
				directionsRender = function(source, destination) {
					$Selectors.dirSteps.find('.msg').hide();
					directionsDisplay.setMap(map);
					
					var request = {
						origin: source,
						destination: destination,
						provideRouteAlternatives: false, 
						travelMode: google.maps.DirectionsTravelMode.DRIVING
					};		
					
					directionsService.route(request, function(response, status) {
						if (status == google.maps.DirectionsStatus.OK) {

							directionsDisplay.setDirections(response);
							
							var _route = response.routes[0].legs[0]; 
							
							pinA = new google.maps.Marker({position: _route.start_location, map: map, icon: markerA}), 
							pinB = new google.maps.Marker({position: _route.end_location, map: map, icon: markerB});
							R1P01 = new google.maps.Marker({position:new google.maps.LatLng(22.215257, -97.859612), map: map, icon: markerR1});
							R1P02 = new google.maps.Marker({position:new google.maps.LatLng(22.218351, -97.858137), map: map, icon: markerR1});
							R1P03 = new google.maps.Marker({position:new google.maps.LatLng(22.219984, -97.861833), map: map, icon: markerR1});
							R1P04 = new google.maps.Marker({position:new google.maps.LatLng(22.221109, -97.863241), map: map, icon: markerR1});
							R1P05 = new google.maps.Marker({position:new google.maps.LatLng(22.223264, -97.863403), map: map, icon: markerR1});
							R1P06 = new google.maps.Marker({position:new google.maps.LatLng(22.226083, -97.864488), map: map, icon: markerR1});
							R1P07 = new google.maps.Marker({position:new google.maps.LatLng(22.227643, -97.865087), map: map, icon: markerR1});
							R1P08 = new google.maps.Marker({position:new google.maps.LatLng(22.230977, -97.866354), map: map, icon: markerR1});
							R1P09 = new google.maps.Marker({position:new google.maps.LatLng(22.234815, -97.867875), map: map, icon: markerR1});
							R1P10 = new google.maps.Marker({position:new google.maps.LatLng(22.236546, -97.868553), map: map, icon: markerR1});
							R1P11 = new google.maps.Marker({position:new google.maps.LatLng(22.239718, -97.870003), map: map, icon: markerR1});
							R1P12 = new google.maps.Marker({position:new google.maps.LatLng(22.241906, -97.870893), map: map, icon: markerR1});
							R1P13 = new google.maps.Marker({position:new google.maps.LatLng(22.243488, -97.871585), map: map, icon: markerR1});
							R1P14 = new google.maps.Marker({position:new google.maps.LatLng(22.246456, -97.873067), map: map, icon: markerR1});
							R1P15 = new google.maps.Marker({position:new google.maps.LatLng(22.249194, -97.874502), map: map, icon: markerR1});
							R1P16 = new google.maps.Marker({position:new google.maps.LatLng(22.252089, -97.875587), map: map, icon: markerR1});
							R1P17 = new google.maps.Marker({position:new google.maps.LatLng(22.255074, -97.876437), map: map, icon: markerR1});
							R1P18 = new google.maps.Marker({position:new google.maps.LatLng(22.257475, -97.876515), map: map, icon: markerR1});
							R1P19 = new google.maps.Marker({position:new google.maps.LatLng(22.260567, -97.875713), map: map, icon: markerR1});
							R1P20 = new google.maps.Marker({position:new google.maps.LatLng(22.262017, -97.875356), map: map, icon: markerR1});
							R1P21 = new google.maps.Marker({position:new google.maps.LatLng(22.266966, -97.873733), map: map, icon: markerR1});
							R1P22 = new google.maps.Marker({position:new google.maps.LatLng(22.270801, -97.873819), map: map, icon: markerR1});
							R1P23 = new google.maps.Marker({position:new google.maps.LatLng(22.272840, -97.874549), map: map, icon: markerR1});
							R1P24 = new google.maps.Marker({position:new google.maps.LatLng(22.280085, -97.872962), map: map, icon: markerR1});
							R1P25 = new google.maps.Marker({position:new google.maps.LatLng(22.282594, -97.872885), map: map, icon: markerR1});
							R1P26 = new google.maps.Marker({position:new google.maps.LatLng(22.287161, -97.873288), map: map, icon: markerR1});
							R1P27 = new google.maps.Marker({position:new google.maps.LatLng(22.291412, -97.873444), map: map, icon: markerR1});
							R1P28 = new google.maps.Marker({position:new google.maps.LatLng(22.293804, -97.874935), map: map, icon: markerR1});
							R1P29 = new google.maps.Marker({position:new google.maps.LatLng(22.297780, -97.877338), map: map, icon: markerR1});
							R1P30 = new google.maps.Marker({position:new google.maps.LatLng(22.301153, -97.879494), map: map, icon: markerR1});
							R1P31 = new google.maps.Marker({position:new google.maps.LatLng(22.304512, -97.881523), map: map, icon: markerR1});
							R1P32 = new google.maps.Marker({position:new google.maps.LatLng(22.307325, -97.881401), map: map, icon: markerR1});
							R1P33 = new google.maps.Marker({position:new google.maps.LatLng(22.310042, -97.880535), map: map, icon: markerR1});
							R1P34 = new google.maps.Marker({position:new google.maps.LatLng(22.312503, -97.879749), map: map, icon: markerR1});
							R1P35 = new google.maps.Marker({position:new google.maps.LatLng(22.314585, -97.879110), map: map, icon: markerR1});
							R1P36 = new google.maps.Marker({position:new google.maps.LatLng(22.317512, -97.878183), map: map, icon: markerR1});
							R1P37 = new google.maps.Marker({position:new google.maps.LatLng(22.320528, -97.877257), map: map, icon: markerR1});
							R1P38 = new google.maps.Marker({position:new google.maps.LatLng(22.324507, -97.876004), map: map, icon: markerR1});
							R1P39 = new google.maps.Marker({position:new google.maps.LatLng(22.331705, -97.873746), map: map, icon: markerR1});
							R1P40 = new google.maps.Marker({position:new google.maps.LatLng(22.338263, -97.873937), map: map, icon: markerR1});
							R1P41 = new google.maps.Marker({position:new google.maps.LatLng(22.344253, -97.875792), map: map, icon: markerR1});
							R1P42 = new google.maps.Marker({position:new google.maps.LatLng(22.347632, -97.878024), map: map, icon: markerR1});
							R1P43 = new google.maps.Marker({position:new google.maps.LatLng(22.350809, -97.882444), map: map, icon: markerR1});
							R1P44 = new google.maps.Marker({position:new google.maps.LatLng(22.354615, -97.887482), map: map, icon: markerR1});
							R1P45 = new google.maps.Marker({position:new google.maps.LatLng(22.358370, -97.890941), map: map, icon: markerR1});
							R1P46 = new google.maps.Marker({position:new google.maps.LatLng(22.362380, -97.894563), map: map, icon: markerR1});
							R1P47 = new google.maps.Marker({position:new google.maps.LatLng(22.368558, -97.900290), map: map, icon: markerR1});
							R1P48 = new google.maps.Marker({position:new google.maps.LatLng(22.372841, -97.904042), map: map, icon: markerR1});
							R1P49 = new google.maps.Marker({position:new google.maps.LatLng(22.379789, -97.900962), map: map, icon: markerR1});
							R1P50 = new google.maps.Marker({position:new google.maps.LatLng(22.387963, -97.895817), map: map, icon: markerR1});
							R1P51 = new google.maps.Marker({position:new google.maps.LatLng(22.391257, -97.893731), map: map, icon: markerR1});
							R1P52 = new google.maps.Marker({position:new google.maps.LatLng(22.390254, -97.885395), map: map, icon: markerR1});
							R1P53 = new google.maps.Marker({position:new google.maps.LatLng(22.379760, -97.911089), map: map, icon: markerR2});
							R1P54 = new google.maps.Marker({position:new google.maps.LatLng(22.381784, -97.914877), map: map, icon: markerR2});
							R1P55 = new google.maps.Marker({position:new google.maps.LatLng(22.411845, -97.934748), map: map, icon: markerR2});
							R1P56 = new google.maps.Marker({position:new google.maps.LatLng(22.417532, -97.939866), map: map, icon: markerR2});
							R1P57 = new google.maps.Marker({position:new google.maps.LatLng(22.390254, -97.885395), map: map, icon: markerR2});
							R1P58 = new google.maps.Marker({position:new google.maps.LatLng(22.421673, -97.944699), map: map, icon: markerR2});
							R1P59 = new google.maps.Marker({position:new google.maps.LatLng(22.417776, -97.936828), map: map, icon: markerR2});
							R1P59 = new google.maps.Marker({position:new google.maps.LatLng(22.420826, -97.934457), map: map, icon: markerR2});
							


							var infowindowR1P01 = new google.maps.InfoWindow({
								content: 'Urban Central-Todas Nuestras Rutas'
							});

							google.maps.event.addListener(R1P01, 'click', function() {
								infowindowR1P01.open(map, R1P01);
							});

							var infowindowR1P02 = new google.maps.InfoWindow({
								content: 'Universidad del Golfo-Todas Nuestras Rutas'
							});

							google.maps.event.addListener(R1P02, 'click', function() {
								infowindowR1P02.open(map, R1P02);
							});

							var infowindowR1P03 = new google.maps.InfoWindow({
								content: 'Instituto Universitario de Tamaulipas-Todas Nuestras Rutas'
							});

							google.maps.event.addListener(R1P03, 'click', function() {
								infowindowR1P03.open(map, R1P03);
							});

							var infowindowR1P04 = new google.maps.InfoWindow({
								content: 'Preparatoria Francisco Medina Cedillo'
							});

							google.maps.event.addListener(R1P04, 'click', function() {
								infowindowR1P04.open(map, R1P04);
							});

							var infowindowR1P05 = new google.maps.InfoWindow({
								content: 'Arteli Hidalgo'
							});

							google.maps.event.addListener(R1P05, 'click', function() {
								infowindowR1P05.open(map, R1P05);
							});

							var infowindowR1P06 = new google.maps.InfoWindow({
								content: 'Torre Médica Tampico'
							});

							google.maps.event.addListener(R1P06, 'click', function() {
								infowindowR1P06.open(map, R1P06);
							});

							var infowindowR1P07 = new google.maps.InfoWindow({
								content: 'Dirección de Tránsito y Vialidad'
							});

							google.maps.event.addListener(R1P07, 'click', function() {
								infowindowR1P07.open(map, R1P07);
							});

							var infowindowR1P08 = new google.maps.InfoWindow({
								content: 'Walmart Alijadores'
							});

							google.maps.event.addListener(R1P08, 'click', function() {
								infowindowR1P08.open(map, R1P08);
							});

							var infowindowR1P09 = new google.maps.InfoWindow({
								content: 'Clínica Hospital Cemain'
							});

							google.maps.event.addListener(R1P09, 'click', function() {
								infowindowR1P09.open(map, R1P09);
							});

							var infowindowR1P10 = new google.maps.InfoWindow({
								content: 'Bonitto Inn Hidalgo'
							});

							google.maps.event.addListener(R1P10, 'click', function() {
								infowindowR1P10.open(map, R1P10);
							});		

							var infowindowR1P11 = new google.maps.InfoWindow({
								content: 'Restaurante Jardín Corona'
							});

							google.maps.event.addListener(R1P11, 'click', function() {
								infowindowR1P11.open(map, R1P11);
							});

							var infowindowR1P12 = new google.maps.InfoWindow({
								content: 'Banco Santander'
							});

							google.maps.event.addListener(R1P12, 'click', function() {
								infowindowR1P12.open(map, R1P12);
							});

							var infowindowR1P13 = new google.maps.InfoWindow({
								content: 'Brazza y Fogo'
							});

							google.maps.event.addListener(R1P13, 'click', function() {
								infowindowR1P13.open(map, R1P13);
							});

							var infowindowR1P14 = new google.maps.InfoWindow({
								content: 'KFC Ejército'
							});

							google.maps.event.addListener(R1P14, 'click', function() {
								infowindowR1P14.open(map, R1P14);
							});

							var infowindowR1P15 = new google.maps.InfoWindow({
								content: 'Vizzio Gym'
							});

							google.maps.event.addListener(R1P15, 'click', function() {
								infowindowR1P15.open(map, R1P15);
							});

							var infowindowR1P16 = new google.maps.InfoWindow({
								content: 'BBVA Bancomer'
							});

							google.maps.event.addListener(R1P16, 'click', function() {
								infowindowR1P16.open(map, R1P16);
							});

							var infowindowR1P17 = new google.maps.InfoWindow({
								content: 'Beneficiencia Española de Tampico'
							});

							google.maps.event.addListener(R1P17, 'click', function() {
								infowindowR1P17.open(map, R1P17);
							});

							var infowindowR1P18 = new google.maps.InfoWindow({
								content: 'Macro Arteli'
							});

							google.maps.event.addListener(R1P18, 'click', function() {
								infowindowR1P18.open(map, R1P18);
							});

							var infowindowR1P19 = new google.maps.InfoWindow({
								content: 'Liverpool'
							});

							google.maps.event.addListener(R1P19, 'click', function() {
								infowindowR1P19.open(map, R1P19);
							});	

							var infowindowR1P20 = new google.maps.InfoWindow({
								content: 'Chedraui Tampico Crystal'
							});

							google.maps.event.addListener(R1P20, 'click', function() {
								infowindowR1P20.open(map, R1P20);
							});

							var infowindowR1P21 = new google.maps.InfoWindow({
								content: 'T.G.I. Fridays'
							});

							google.maps.event.addListener(R1P21, 'click', function() {
								infowindowR1P21.open(map, R1P21);
							});

							var infowindowR1P22 = new google.maps.InfoWindow({
								content: 'WalMart Hidalgo'
							});

							google.maps.event.addListener(R1P22, 'click', function() {
								infowindowR1P22.open(map, R1P22);
							});

							var infowindowR1P23 = new google.maps.InfoWindow({
								content: 'Cinepolis'
							});

							google.maps.event.addListener(R1P23, 'click', function() {
								infowindowR1P23.open(map, R1P23);
							});
							var infowindowR1P24 = new google.maps.InfoWindow({
								content: 'HEB Hidalgo'
							});

							google.maps.event.addListener(R1P24, 'Universidad del Noreste', function() {
								infowindowR1P24.open(map, R1P24);
							});

							var infowindowR1P25 = new google.maps.InfoWindow({
								content: 'Sams Tampico'
							});

							google.maps.event.addListener(R1P25, 'click', function() {
								infowindowR1P25.open(map, R1P25);
							});

							var infowindowR1P26 = new google.maps.InfoWindow({
								content: 'Hampton Inn'
							});

							google.maps.event.addListener(R1P26, 'click', function() {
								infowindowR1P26.open(map, R1P26);
							});

							var infowindowR1P27 = new google.maps.InfoWindow({
								content: 'El Asador Aeropuerto'
							});

							google.maps.event.addListener(R1P27, 'click', function() {
								infowindowR1P27.open(map, R1P27);
							});

							var infowindowR1P28 = new google.maps.InfoWindow({
								content: 'Soriana Aeropuerto'
							});

							google.maps.event.addListener(R1P28, 'click', function() {
								infowindowR1P28.open(map, R1P28);
							});	

							var infowindowR1P29 = new google.maps.InfoWindow({
								content: 'El Mejor Pan'
							});

							google.maps.event.addListener(R1P29, 'click', function() {
								infowindowR1P29.open(map, R1P29);
							});	

							var infowindowR1P30 = new google.maps.InfoWindow({
								content: 'Avante'
							});

							google.maps.event.addListener(R1P30, 'click', function() {
								infowindowR1P30.open(map, R1P30);
							});	

							var infowindowR1P31 = new google.maps.InfoWindow({
								content: 'Scotiabank Tampico - Mante'
							});

							google.maps.event.addListener(R1P31, 'click', function() {
								infowindowR1P31.open(map, R1P31);
							});	

							var infowindowR1P32 = new google.maps.InfoWindow({
								content: 'Carnitas Orta'
							});

							google.maps.event.addListener(R1P33, 'click', function() {
								infowindowR1P35.open(map, R1P34);
							});	

							var infowindowR1P36 = new google.maps.InfoWindow({
								content: 'Bancomer Tampico - Mante'
							});

							google.maps.event.addListener(R1P36, 'click', function() {
								infowindowR1P36.open(map, R1P36);
							});	

							var infowindowR1P37 = new google.maps.InfoWindow({
								content: 'Abastecedora de Aceros de Tampico'
							});

							google.maps.event.addListener(R1P37, 'click', function() {
								infowindowR1P37.open(map, R1P37);
							});	

							var infowindowR1P38 = new google.maps.InfoWindow({
								content: 'AutoZone Las Torres'
							});

							google.maps.event.addListener(R1P38, 'click', function() {
								infowindowR1P38.open(map, R1P38);
							});	
							var infowindowR1P39 = new google.maps.InfoWindow({
								content: 'Agrigan'
							});

							google.maps.event.addListener(R1P39, 'click', function() {
								infowindowR1P39.open(map, R1P39);
							});	
							var infowindowR1P40 = new google.maps.InfoWindow({
								content: 'MADISA Altamira'
							});

							google.maps.event.addListener(R1P41, 'click', function() {
								infowindowR1P41.open(map, R1P41);
							});	
							var infowindowR1P42 = new google.maps.InfoWindow({
								content: 'Chedrahui Tampico Norte'
							});

							google.maps.event.addListener(R1P42, 'click', function() {
								infowindowR1P42.open(map, R1P42);
							});	
							var infowindowR1P43 = new google.maps.InfoWindow({
								content: 'Distribuidor El Barquito'
							});

							google.maps.event.addListener(R1P43, 'click', function() {
								infowindowR1P43.open(map, R1P43);
							});	
							var infowindowR1P44 = new google.maps.InfoWindow({
								content: 'Nautico Residencial'
							});

							google.maps.event.addListener(R1P44, 'click', function() {
								infowindowR1P44.open(map, R1P44);
							});	
							var infowindowR1P45 = new google.maps.InfoWindow({
								content: 'Gas Jebla'
							});

							google.maps.event.addListener(R1P45, 'click', function() {
								infowindowR1P45.open(map, R1P45);
							});	
							var infowindowR1P46 = new google.maps.InfoWindow({
								content: 'Kenworth de la Huasteca'
							});

							google.maps.event.addListener(R1P46, 'click', function() {
								infowindowR1P46.open(map, R1P46);
							});	
							var infowindowR1P47 = new google.maps.InfoWindow({
								content: 'Maseca'
							});

							google.maps.event.addListener(R1P47, 'click', function() {
								infowindowR1P47.open(map, R1P47);
							});	
							var infowindowR1P48 = new google.maps.InfoWindow({
								content: 'Holida Inn Tampico Altamira'
							});

							google.maps.event.addListener(R1P48, 'click', function() {
								infowindowR1P48.open(map, R1P48);
							});	
							var infowindowR1P49 = new google.maps.InfoWindow({
								content: 'Iberdrola'
							});

							google.maps.event.addListener(R1P49, 'click', function() {
								infowindowR1P49.open(map, R1P49);
							});	
							var infowindowR1P50 = new google.maps.InfoWindow({
								content: 'Las Palapas de Simón'
							});

							google.maps.event.addListener(R1P50, 'click', function() {
								infowindowR1P50.open(map, R1P50);
							});	
							var infowindowR1P51 = new google.maps.InfoWindow({
								content: 'Distribuidor Tampico - Ciudad Mante'
							});

							google.maps.event.addListener(R1P51, 'click', function() {
								infowindowR1P51.open(map, R1P51);
							});	
							var infowindowR1P52 = new google.maps.InfoWindow({
								content: 'Indelpro'
							});

							google.maps.event.addListener(R1P52, 'click', function() {
								infowindowR1P52.open(map, R1P52);
							});	
							var infowindowR1P53 = new google.maps.InfoWindow({
								content: 'Motel Plaza Altamira'
							});

							google.maps.event.addListener(R1P53, 'click', function() {
								infowindowR1P53.open(map, R1P53);
							});		

							var infowindowR1P54 = new google.maps.InfoWindow({
								content: 'Motel Plaza Altamira'
							});

							google.maps.event.addListener(R1P54, 'click', function() {
								infowindowR1P54.open(map, R1P54);
							});		
							var infowindowR1P55 = new google.maps.InfoWindow({
								content: 'Urban Pedrera'
							});

							google.maps.event.addListener(R1P55, 'click', function() {
								infowindowR1P55.open(map, R1P55);
							});	
							var infowindowR1P56 = new google.maps.InfoWindow({
								content: 'Urban Pedrera'
							});

							google.maps.event.addListener(R1P56, 'click', function() {
								infowindowR1P56.open(map, R1P56);
							});	
							var infowindowR1P57 = new google.maps.InfoWindow({
								content: 'Urban Pedrera'
							});

							google.maps.event.addListener(R1P57, 'click', function() {
								infowindowR1P57.open(map, R1P57);
							});	
							var infowindowR1P58 = new google.maps.InfoWindow({
								content: 'Urban Pedrera'
							});

							google.maps.event.addListener(R1P58, 'click', function() {
								infowindowR1P58.open(map, R1P58);
							});	
							var infowindowR1P59 = new google.maps.InfoWindow({
								content: 'Urban Pedrera'
							});

							google.maps.event.addListener(R1P59, 'click', function() {
								infowindowR1P59.open(map, R1P59);
							});	
							var infowindowR1P60 = new google.maps.InfoWindow({
								content: 'Urban Pedrera'
							});

							google.maps.event.addListener(R1P60, 'click', function() {
								infowindowR1P60.open(map, R1P60);
							});	
																						
						}
					});
				}, // directionsRender Ends
				
				fetchAddress = function(p) {
					var Position = new google.maps.LatLng(p.coords.latitude, p.coords.longitude),  
						Locater = new google.maps.Geocoder();
					
					Locater.geocode({'latLng': Position}, function (results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							var _r = results[0];
							$Selectors.dirSrc.val(_r.formatted_address);
						}
					});
				}, // fetchAddress Ends
				
				invokeEvents = function() {
					// Get Directions
					$Selectors.getDirBtn.on('click', function(e) {
						e.preventDefault();
						var src = $Selectors.dirSrc.val(), 
							dst = $Selectors.dirDst.val();
						
						directionsRender(src, dst);
					});
					
					// Reset Btn
					$Selectors.paneResetBtn.on('click', function(e) {
						$Selectors.dirSteps.html('');
						$Selectors.dirSrc.val('');
						$Selectors.dirDst.val('');
						
						if(pinA) pinA.setMap(null);
						if(pinB) pinB.setMap(null);	
						if(R1P01) R1P01.setMap(null);
						if(R1P03) R1P03.setMap(null);
						if(R1P04) R1P04.setMap(null);
						if(R1P05) R1P05.setMap(null);
						if(R1P06) R1P06.setMap(null);
						if(R1P07) R1P07.setMap(null);
						if(R1P08) R1P08.setMap(null);
						if(R1P09) R1P09.setMap(null);
						if(R1P10) R1P10.setMap(null);
						if(R1P11) R1P11.setMap(null);
						if(R1P12) R1P12.setMap(null);
						if(R1P13) R1P13.setMap(null);
						if(R1P14) R1P14.setMap(null);
						if(R1P15) R1P15.setMap(null);
						if(R1P16) R1P16.setMap(null);
						if(R1P17) R1P17.setMap(null);
						if(R1P18) R1P18.setMap(null);
						if(R1P19) R1P19.setMap(null);
						if(R1P20) R1P20.setMap(null);
						if(R1P21) R1P21.setMap(null);
						if(R1P23) R1P23.setMap(null);
						if(R1P24) R1P24.setMap(null);
						if(R1P25) R1P25.setMap(null);
						if(R1P26) R1P26.setMap(null);
						if(R1P27) R1P27.setMap(null);
						if(R1P28) R1P28.setMap(null);
						if(R1P29) R1P29.setMap(null);
						if(R1P30) R1P30.setMap(null);
						if(R1P31) R1P31.setMap(null);
						if(R1P32) R1P32.setMap(null);
						if(R1P33) R1P33.setMap(null);
						if(R1P34) R1P34.setMap(null);
						if(R1P35) R1P35.setMap(null);
						if(R1P36) R1P36.setMap(null);
						if(R1P37) R1P37.setMap(null);
						if(R1P38) R1P38.setMap(null);
						if(R1P39) R1P39.setMap(null);
						if(R1P40) R1P40.setMap(null);
						if(R1P41) R1P41.setMap(null);
						if(R1P42) R1P42.setMap(null);
						if(R1P43) R1P43.setMap(null);
						if(R1P44) R1P44.setMap(null);
						if(R1P45) R1P45.setMap(null);
						if(R1P46) R1P46.setMap(null);
						if(R1P47) R1P47.setMap(null);
						if(R1P48) R1P48.setMap(null);
						if(R1P49) R1P49.setMap(null);
						if(R1P50) R1P50.setMap(null);
						if(R1P51) R1P51.setMap(null);
						if(R1P52) R1P52.setMap(null);
						if(R1P53) R1P53.setMap(null);
						if(R1P54) R1P54.setMap(null);
						if(R1P55) R1P55.setMap(null);
						if(R1P56) R1P56.setMap(null);
						if(R1P57) R1P57.setMap(null);
						if(R1P58) R1P58.setMap(null);
						if(R1P59) R1P59.setMap(null);
	
						
						directionsDisplay.setMap(null);					
					});
					
					// Toggle Btn
					$Selectors.paneToggle.toggle(function(e) {
						$Selectors.dirPanel.animate({'left': '-=305px'});
						jQuery(this).html('&gt;');
					}, function() {
						$Selectors.dirPanel.animate({'left': '+=305px'});
						jQuery(this).html('&lt;');
					});
					
					// Use My Location / Geo Location Btn
					$Selectors.useGPSBtn.on('click', function(e) {		
						if (navigator.geolocation) {
							navigator.geolocation.getCurrentPosition(function(position) {
								fetchAddress(position);
							});	
						}
					});
				}, //invokeEvents Ends 
				
				_init = function() {
					mapSetup();
					invokeEvents();
				}; // _init Ends
				
			this.init = function() {
				_init();
				return this; // Refers to: mapDemo.Directions
			}
			return this.init(); // Refers to: mapDemo.Directions.init()
		} // _Directions Ends
		return new _Directions(); // Creating a new object of _Directions rather than a funtion
	}()); // mapDemo.Directions Ends
})(window.mapDemo = window.mapDemo || {}, jQuery);
