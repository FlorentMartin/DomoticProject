var express = require('express');
//const debugHttp = require('debug-http');
//debugHttp();
 
const http = require('http');
var app = express();
var convert = require('color-convert');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.listen(3000);
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('home');
});

app.put('/api/test', function(req, res) {
	value = req.body.value == "true",
	r = req.body.r;
	g = req.body.g;
	b = req.body.b;
	
	
	hsl=convert.rgb.hsl(r, g, b);
	//console.log(req.body);
	
	
	const postData = JSON.stringify({
		"on" : value,
		"sat" : 254,
		"bri" : 254,
		"hue" : hsl[0]*182
	});

	const options = {
	  hostname: '192.168.1.91',
	  port: 80,
	  path: '/api/LeTP3stblkWVtmCjNH8SE81CzZFh631wTAo9TDzm/lights/2/state',
	  method: 'PUT',
	  headers: {
	    'Content-Type': 'application/x-www-form-urlencoded',
	    'Content-Length': Buffer.byteLength(postData)
	  }
	};

	const reqsend = http.request(options, (res) => {
        res.setEncoding('utf8');
         res.on('data', function (chunk) {
             console.log('Response: ' + chunk);
         });
	}).on("error", (err) => {
  console.log("Error: " + err.message);
});
reqsend.write(postData);
  reqsend.end();
	
	
  res.render('home');
});