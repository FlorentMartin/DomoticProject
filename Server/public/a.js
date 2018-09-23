function a(value) {
	rgb=document.getElementById('colorPicker').jscolor.rgb;
	$.ajax( {
		url : "/api/test",
		data : 
			{
			"value" : value,
			"r" : rgb[0],
			"g" : rgb[1],
			"b" : rgb[2]
		 }
		,
		method : "PUT"
	} )
}
