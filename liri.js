// This is the twitter api, this uses the OAuth portion which is also part of the keys
var Twitter = require("twitter");

// This sets up the variable and pulls the twitter API keys from keys.js
var config = require("./config.js");

//this is the object of twit which will help us to call functions inside it
var T = new Twitter(config);

console.log(config);

var params = {screen_name: 'Wbattles87'};

T.get('search/tweets', params, gotData);






