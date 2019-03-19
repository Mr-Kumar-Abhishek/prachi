// server.js
// where the node app starts

// init project
var http = require('http');
var debug = require('debug')('test');
var express = require('express');
var irc = require('irc');
var normalizePort = require( 'normalize-port' );
var app = express();

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3002');
app.set('port', port);


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// listen for requests :)
var listener = app.listen(port, function() {
  console.log('Prachi is listening on port ' + listener.address().port);
});

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


var prachi = new irc.Client('irc.undernet.org', 'prachi', {
    userName: 'prachi',
    realName: 'prachi kumar',
    channels: ['#anx-programming'],
    autoRejoin: true
});
