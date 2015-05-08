var mapa; // obiekt globalny
var dymek = new google.maps.InfoWindow();
function mapaStart()  
{  
	var wspolrzedne = new google.maps.LatLng(53.775808, 20.479153);
	var opcjeMapy = {
		zoom: 15,
		center: wspolrzedne,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true
	};
	mapa = new google.maps.Map(document.getElementById("mapka"), opcjeMapy); 			
	
	var punkty = [new google.maps.LatLng(53.777589, 20.477597),
	              new google.maps.LatLng(53.777076, 20.477028),
	              new google.maps.LatLng(53.777374, 20.476224),
	              new google.maps.LatLng(53.777025, 20.475859),
	              new google.maps.LatLng(53.777393, 20.474840),
	              new google.maps.LatLng(53.777355, 20.474303),
	              new google.maps.LatLng(53.777881, 20.472801),
	              new google.maps.LatLng(53.778376, 20.472919),
	              new google.maps.LatLng(53.778661, 20.474893),
	              new google.maps.LatLng(53.778807, 20.475634),
	              new google.maps.LatLng(53.778667, 20.476685),
	              new google.maps.LatLng(53.778078, 20.477940),
	              new google.maps.LatLng(53.778395, 20.479936),
	              new google.maps.LatLng(53.778610, 20.480161),
	              new google.maps.LatLng(53.779060, 20.480204)
		          	];
	var punkty2 = [new google.maps.LatLng(53.776571, 20.480877),
	              new google.maps.LatLng(53.776197, 20.481081),
	              new google.maps.LatLng(53.776096, 20.481682),
	              new google.maps.LatLng(53.775918, 20.481885),
	              new google.maps.LatLng(53.775367, 20.481875),
	              new google.maps.LatLng(53.775246, 20.481810),
	              new google.maps.LatLng(53.775227, 20.481585),
	              new google.maps.LatLng(53.775119, 20.481360),
	              new google.maps.LatLng(53.774872, 20.481285),
	              new google.maps.LatLng(53.774720, 20.481445),
	              new google.maps.LatLng(53.774631, 20.481821),
	              new google.maps.LatLng(53.774656, 20.482164),
	              new google.maps.LatLng(53.774257, 20.482347),
	              new google.maps.LatLng(53.773636, 20.482862),
	              new google.maps.LatLng(53.773204, 20.482937),
	              new google.maps.LatLng(53.772463, 20.482626),
	              new google.maps.LatLng(53.772190, 20.482443),
	              new google.maps.LatLng(53.771841, 20.482304),
	              new google.maps.LatLng(53.771290, 20.481939),
	              new google.maps.LatLng(53.770789, 20.483452),
		          	];
	var polilinia = new google.maps.Polyline({
		map: 			mapa,
		path: 			punkty,
		strokeColor:	'#ff0000',
		strokeWeight:	3
	});
	var polilinia2 = new google.maps.Polyline({
		map: 			mapa,
		path: 			punkty2,
		strokeColor:	'#20E323',
		strokeWeight:	3
	});

	google.maps.event.addListener(polilinia, 'click', function(zdarzenie)
			{
				var tekst = '<a class="navigate-right"><img class="media-object pull-left" src="http://olsztynkocham.pl/wp-content/uploads/2014/01/RTEmagicC_534151c710.jpg.jpg"><div class="media-body"><h3>Wysoka brama - Zamek - Ratusz</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p></div></a>'
				dymek.setContent(tekst);
				dymek.setPosition(zdarzenie.latLng);
				dymek.open(mapa); 
			});
	google.maps.event.addListener(polilinia2, 'click', function(zdarzenie)
			{
				var tekst = '<a class="navigate-right"><img class="media-object pull-left" src="http://super.olsztyn.pl/wp-content/uploads/photo-gallery/thumb/park-centralny-olsztyn-21.jpg"><div class="media-body"><h3>Spacer w parku centralnym</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p></div></a>'
				dymek.setContent(tekst);
				dymek.setPosition(zdarzenie.latLng);
				dymek.open(mapa); 
			});
}  

function getLocation() {
    if (navigator.geolocation) {
    	var options = {timeout:60000};
        navigator.geolocation.watchPosition(showPosition,options);
    } 
}
function showPosition(position) {
    var punkty3 = [new google.maps.LatLng(position.coords.latitude, position.coords.longitude),];
    var polilinia = new google.maps.Polyline({
		map: 			mapa,
		path: 			punkty,
		strokeColor:	'#000000',
		strokeWeight:	3
	});
}