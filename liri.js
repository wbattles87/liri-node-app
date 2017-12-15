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


//  the movie database should be along the same lines as the other 2.
//  my problem is the documentation just confuses me on most APIS.  I understand what API's are and all
//  but making them work just flat out confuses me.  I spent 3 days just trying to get twitter to work to find out
//  the node package I first used was wrong.  It works outside of filtering out the correct data.
//  The other thing I was unsure of was how the program would run through the program and pick the right function
//  based on the user input.  Do you do if statements?  I would understand this in regular JS but node is just still a 
//  weird concept to me.  It doesnt even seem like JS but so much more C based language.  Im working through the node js tutorials
//  on youtube now (the ones linked through the resource tab) so hopefully this will help.  
//  There just seems to be so much stuff we dont cover through node that we have to pick up through crappy examples and 
//  documentation online (as to be expected)




