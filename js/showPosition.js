function initMap() {
   var a = {lat: -23.50,     lng: -48.03};
   var b = {lat: -23.501128, lng: -46.879644};

   var map = new google.maps.Map(document.getElementById('map'), {
	center: a,
	scrollwheel: false,
	zoom: 3
   });

   var directionsDisplay = new google.maps.DirectionsRenderer({
	map: map
   });

   var request = {
	destination: b,
	origin: a,
	travelMode: 'DRIVING'
   };

   var directionsService = new google.maps.DirectionsService();
   directionsService.route(request, function(response, status) {
	if (status == 'OK') {
	  directionsDisplay.setDirections(response);
	}
   });
 }