$(document).ready(function(){
  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];
  channels.forEach(function(channel){
    $.when($.getJSON("https://wind-bow.gomix.me/twitch-api/users/" + channel), $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + channel)).then(function(user,stream){
      var userdata = user[2].responseJSON;
      console.log(userdata);
      if (!userdata.error) {
        $("<div class='item'></div>").appendTo(".list").click(function(){
          window.open("https://www.twitch.tv/" + userdata.name);
        }).append("<img src='" + userdata.logo + "' class='logo' />").append("<div>" + userdata.display_name + "</div>");
      } else {
        $("<div class='item'></div>").appendTo(".list").append("<div class='error'>" + userdata.error + "</div>").append("<div class='message'>" + userdata.message + "</div>");
      }
      var streamdata = stream[2].responseJSON.stream;
      console.log(streamdata);
      if (streamdata) {
        $("<div class='game-status'></div>").appendTo(".item:last").append("<div class='game'>" + streamdata.channel.game + "</div>").append("<div class='status'>" + streamdata.channel.status + "</div>");
      } else if (!userdata.error) {
        $("<div class='game-status'></div>").appendTo(".item:last").append("<div class='game'>Offline</div>").append("<div class='status'>Currently not streaming</div>");
      }
    });
  });
});
