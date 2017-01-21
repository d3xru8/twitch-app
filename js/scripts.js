$(document).ready(function(){
  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  channels.forEach(function(channel){
    $.getJSON("https://wind-bow.gomix.me/twitch-api/users/" + channel, function(json){
      $("<div class='item'></div>").appendTo(".list").click(function(){
        window.open("https://www.twitch.tv/" + json.name);
      }).append("<img src='" + json.logo + "' class='logo' />").append("<div>" + json.display_name + "</div>").append("<div class='game-status'></div>");
    });
    $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + channel, function(json){
      if (json.stream) {
        console.log(json.stream.channel);
        $("<div class='game-status'></div>").appendTo(".item:last").append("<div class='game'>" + json.stream.channel.game + "</div>").append("<div class='status'>" + json.stream.channel.status + "</div>");
      }
    });
  });
});
