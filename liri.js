console.log("Hello, Please enter a command");

// This sets up the variable and pulls the twitter API keys from keys.js
var twitterKeys = require("./keys.js");

// This is the twitter api, this uses the OAuth portion which is also part of the keys
var Twit = require ("twit");

//this is the object of twit which will help us to call functions inside it
var T = new Twit(twitterKeys); 

// get() will be our search function on twitter, we can search by username, hastags, whatever
// post() will post to twitter
// stream() will connect to twitter and keep a costant connection.  Can be used for updates and other such things

// this is the param variable which will have key and value ,the key is the keyword which we are interested in searching and count is 
// how many tweets it will return back
var params = {
    user_id: "Wbattles87",
    count: 20,
    location:"Houston, Texas",
    created_at:""
} 

// get is the function to search the tweet which three paramaters 'search/tweets',params and a callback function.
// the callback function is triggered when the data is returned from the API
T.get('users/show', params, mytweets);

// searchedData function is a callback function which returns the data when we make a search
function mytweets(err, data, response) {
  var tweets = data.statuses;
  for (var i=0; i < tweets.length; i++)
    console.log(tweets[i].txt);
} 









// Spotify Section
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
 id: "5c599c5ccdff4e76a6781cb3c012d060",
 secret: "7269955b1ca749a59f7da98c7b0af609"
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
 if (err) {
   return console.log('Error occurred: ' + err);
 }

console.log(data); 
});





