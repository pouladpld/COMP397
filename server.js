var express = require('express');
var app = express();

var portNumber = 8080;

app.use('', express.static(__dirname + '/docs'));

app.listen(portNumber);

console.log("Express started on port " + portNumber);
