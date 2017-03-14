window.onload = function(){
   $.getScript('https://maps.googleapis.com/maps/api/js', function()
	{
    	var mapOptions = {
    		center: new google.maps.LatLng(-27.477356,153.0284231),
    		zoom: 15,
    		mapTypeId: google.maps.MapTypeId.MAP
		}

		var map = new google.maps.Map(document.getElementById("contact_map"), mapOptions);
	});
};