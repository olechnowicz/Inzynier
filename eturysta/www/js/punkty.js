var mapa;
		var dymek = new google.maps.InfoWindow(); // zmienna globalna
		//var ikona = new google.maps.MarkerImage('img/icon38.png',new google.maps.Size(65, 124),new google.maps.Point(0,0),new google.maps.Point(56, 122));
		function dodajMarker(lat,lng,txt)
		{
			
			// tworzymy marker
			var opcjeMarkera =   
			{  
				position: new google.maps.LatLng(lat,lng),  
				map: mapa
				//icon : ikona
			
			}  
			var marker = new google.maps.Marker(opcjeMarkera);
			marker.txt=txt;
			
			google.maps.event.addListener(marker,"click",function()
			{
				dymek.setContent(marker.txt);
				dymek.open(mapa,marker);
			});
			return marker;

			
		}
		
		function mapaStart()   
		{   
			var wspolrzedne = new google.maps.LatLng(53.7775069,20.4790026);
			var opcjeMapy = {
			  zoom: 15,
			  center: wspolrzedne,
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			
			//var rozmiar = new google.maps.Size(32,32);
			//var rozmiar_cien = new google.maps.Size(59,32);
			//var punkt_startowy = new google.maps.Point(0,0);
			//var punkt_zaczepienia = new google.maps.Point(16,16);
			
		//	var ikona1 = new google.maps.MarkerImage("http://maps.google.com/mapfiles/kml/pal2/icon38.png", rozmiar, punkt_startowy, punkt_zaczepienia);
			
			mapa = new google.maps.Map(document.getElementById("mapka"), opcjeMapy); 
			var marker1 = dodajMarker(53.778014, 20.474217,'<a class="navigate-right"><img class="media-object pull-left" src="http://www.zamkipolskie.com/olszt/olszt01.jpg"><div class="media-body"><h3>Zamek</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p></div></a>');
			var marker2 = dodajMarker(53.777748, 20.477651,'<a class="navigate-right"><img class="media-object pull-left" src="http://s.zwinka.pl/var/img/kat/2877a-d.jpg"><div class="media-body"><h3>Wysoka brama</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p></div></a>');
			var marker3 = dodajMarker(53.776537, 20.475795,'<a class="navigate-right"><img class="media-object pull-left" src="http://www.olsztyn.eu/uploads/RTEmagicC_stary_ratusz2.jpg.jpg"><div class="media-body"><h3>Stary ratusz</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p></div></a>');
			var marker4 = dodajMarker(53.776176, 20.477651,'<a class="navigate-right"><img class="media-object pull-left" src="http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Olsztyn-katedra.jpg/240px-Olsztyn-katedra.jpg"><div class="media-body"><h3>Bazylika</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p></div></a>');
		} 
		function getLocation() {
		    if (navigator.geolocation) {
		        navigator.geolocation.getCurrentPosition(showPosition);
		    } 
		}

		function showPosition(position) {
			var marker5 = dodajMarker(position.coords.latitude, position.coords.longitude,'Jesteś tutaj');
			
			google.maps.event.trigger(marker5,'click');
		
		}  