function a(value) {
	rgb=document.getElementById('colorPicker').jscolor.rgb;
	hsl=rgbToHsl(rgb[0],rgb[1],rgb[2]);
	
	$.ajax( {
		url : "http://192.168.1.91/api/LeTP3stblkWVtmCjNH8SE81CzZFh631wTAo9TDzm/lights/2/state",
		data : JSON.stringify(
			{
			"on" : value,
				"sat" : Math.round(hsl[1]*254),
				"bri" : 254,
				"hue" : Math.round(hsl[0]*65535),
				"effect":"none"
		 }
		),
		method : "PUT"
	} )
	
	$.ajax( {
		url : "http://192.168.1.91/api/LeTP3stblkWVtmCjNH8SE81CzZFh631wTAo9TDzm/lights/2/state",
		data : JSON.stringify(
			{
			"on" : value,
				"sat" : 254,
				"bri" : 254,
				"hue" : 65535,
				"effect":"none"
		 }
		),
		method : "PUT"
	} )
}
