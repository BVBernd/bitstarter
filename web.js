var express = require('express');

var app = express.createServer(express.logger());

var buf = fs.readFileSync('index.html');
var text = buf.toString();
//var text = "this is my text";

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
