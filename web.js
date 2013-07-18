var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var test = fs.readFileSync('index.html');
var text = test.toString();
var text2 = "this is my text\n";

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
