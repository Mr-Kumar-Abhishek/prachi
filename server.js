// server.js
// where the node app starts

// init project
var express = require('express');
var irc = require('irc');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Prachi is listening on port ' + listener.address().port);
});

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


var prachi = new irc.Client('irc.undernet.org', 'prachi', {
    channels: ['#anx-programming'],
});
