var express = require('express');

// Setup Application

var app = express();
var server = app.listen(4000, function(){
	console.log("Listening to requests on port 4000");
})

app.use(express.static('public'))