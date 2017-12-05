


// This will pull the API keys for twitter from the keys.js file and save it in twitterkeys variable
var twitterKeys = require("./keys.js");

//this is the object of twit which will help us to call functions inside it
var T = new Twit(config); 

// this is the param variable which will have key and value ,the key is the keyword which we are interested in searching and count is the count of it
var params = {
    q: 'akshay',
    count: 100
} 

// get is the function to search the tweet which three paramaters 'search/tweets',params and a callback function.
T.get('search/tweets', params,searchedData);

// searchedData function is a callback function which returns the data when we make a search
function searchedData(err, data, response) {
console.log(data);
} 


// Spotify Section
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
 id: 5c599c5ccdff4e76a6781cb3c012d060,
 secret: 7269955b1ca749a59f7da98c7b0af609
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
 if (err) {
   return console.log('Error occurred: ' + err);
 }

console.log(data); 
});





