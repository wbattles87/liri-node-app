// This is the twitter api, this uses the OAuth portion which is also part of the keys
var Twitter = require("twitter");

// This sets up the variable and pulls the twitter API keys from keys.js
var config = require("./keys.js");

//this is the object of twit which will help us to call functions inside it
var T = new Twitter(config);

var params = { 
  screen_name: 'Wbattles87',
  count: '20' 
};

T.get('https://api.twitter.com/1.1/search/tweets.json', { q: 'from:Wbattles87', count: "20" }, function (error, tweets, response) {
  if (error) throw error;
  console.log(tweets);
}); 

//twitter is done, need to figure out how to only show the tweets

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: "5c599c5ccdff4e76a6781cb3c012d060",
  secret: "7269955b1ca749a59f7da98c7b0af609"
      });

spotify.search({type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});



