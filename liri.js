//At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.

//Make it so liri.js can take in one of the following commands:

//my-tweets

//spotify-this-song

//movie-this

//do-what-it-says

var keys = require('./keys.js');
var twitter = require('twitter');
var twitterKeys = keys.twitterKeys;
var spotify = require('spotify');

var client = new twitter({
        consumer_key: keys.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key: keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterKeys.access_token_secret
    });

function myTweets() {
    var params = {screen_name: 'nodejs'};
    client.get('statuses/user_timeline', {screen_name: 'RDiggle13'}, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < JSON.stringify(tweets.length); i++) {
                console.log('This is a tweet: '+JSON.stringify(tweets[i].text, null, 2));
                console.log('time: '+JSON.stringify(tweets[i].created_at, null, 2),false,true);
            }
        } else {
            console.error('An error occurred!');
            console.log('error statusCode = '+ response.statusCode);
        }
    });
}

var spotifyObtain = function (songName){

 
function spotify(){
    spotify.search({ type: 'track', query: songName }, function(error, data) {
    if ( error ) {
        console.log('Error occurred: ' + error);
        return;
    }
    else if( !error)
    {
        console.log( + " is a great song.")
    }
 
    console.log(data.tracks.items[0])
    });
}
}

myTweets();

//