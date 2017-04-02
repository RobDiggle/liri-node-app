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

var artistCall = function(artist) {
    return artist.name;
}

var spotifyObtain = function (songName){

 

    spotify.search({ type: 'track', query: songName }, function(error, data) {
    if ( error ) {
        console.log('Error occurred: ' + error);
        return;
    }
    else if( !error)
    {
        console.log( + " is a great song.")
    
 
    var songs = data.tracks.items;
    for(i=0; i < songs.length; i++)
    {
         console.log(i);

    }

    console.log(songs[i].name)
    }});

}

var omdb = require('omdb');
 
var findMovie = function(movieName) {
    omdb.search('saw', function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 
    movies.forEach(function(movie) {
        console.log('%s (%d)', movie.title, movie.year);
    });
 
    // Saw (2004) 
    // Saw II (2005) 
    // Saw III (2006) 
    // Saw IV (2007) 
    // ... 
});
 
omdb.get({ title: 'Saw', year: 2004 }, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
 
    if(!movie) {
        return console.log('Movie not found!');
    }
 
    console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
    console.log(movie.plot);
 
    // Saw (2004) 7.6/10 
    // Two men wake up at opposite sides of a dirty, disused bathroom, chained 
    // by their ankles to pipes. Between them lies... 
}});






myTweets();
spotifyObtain();

//