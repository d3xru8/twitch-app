$(document).ready(function(){
  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  channels.forEach(function(channel){
    $.getJSON("https://wind-bow.gomix.me/twitch-api/users/" + channel, function(json){
    });
    $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + channel, function(json){
    });
  });
});
