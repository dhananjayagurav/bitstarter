var express = require('express');
var app = express();
app.use(express.logger());

var msg = fs.readFileSync('index.html');

var buf = new Buffer (fs.readFileSync('index.html'));

buf.toString ();

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
