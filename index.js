const compression = require('compression');
const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const port = process.env.PORT || 3000;



// Compress all HTTP responses
app.use(compression())
//Routing
app.use(express.static('client'));
app.all("*", function (req, res, next) {
	res.sendFile(path.join(__dirname+'/client/index.html'))
 });

 //Run server
 http.listen(port, function() {
	console.log('listening on *:'+port);
 });
