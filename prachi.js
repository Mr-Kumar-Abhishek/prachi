
// init project
var irc = require('irc');
const AInterpreter = require('aimlinterpreter');



// listen for requests :)


var prachi = new irc.Client('irc.undernet.org', 'prachi', {
    userName: 'prachi',
    realName: 'prachi kumar',
    channels: ['#anx-programming', '#deaf'],
    autoRejoin: true,
    autoConnect: true
});

prachi.addListener("join", function(channel, who) {
	// Welcome them in!
	prachi.say(channel, who + " welcome back !");
});
