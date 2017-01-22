$(document).ready(function(){
  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];
  console.log(channels);
  channels.forEach(function(channel){
    $.when($.getJSON("https://wind-bow.gomix.me/twitch-api/users/" + channel), $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + channel)).then(function(user,stream){
      var userdata = user[2].responseJSON;
      if (!userdata.error) {
        $("<div class='item'></div>").appendTo(".list").click(function(){
          window.open("https://www.twitch.tv/" + userdata.name);
        }).append("<img src='" + userdata.logo + "' class='logo' />").append("<div class='display-name'>" + userdata.display_name + "</div>");
      } else {
        $("<div class='item not-found'></div>").appendTo(".list").append("<img class='logo' src='images/placeholder.png' />").append("<div class='display-name non-user'>" + channel + "</div>");
      }
      var streamdata = stream[2].responseJSON.stream;
      if (streamdata) {
        $("<div class='game-status'></div>").appendTo(".item:last").append("<div class='game'>Streaming: " + streamdata.channel.game + "</div>").append("<div class='status'>" + streamdata.channel.status + "</div>");
      } else if (!userdata.error) {
        $("<div class='game-status'></div>").appendTo(".item:last").append("<div class='game'>Offline</div>").append("<div class='status'>Currently not streaming</div>");
      } else {
        $("<div class='game-status'></div>").appendTo(".item:last").click(function(){
          this.closest(".item").remove();
          channels.splice(channels.indexOf(channel,1));
          console.log(channels);
        }).append("<div class='game error'>" + userdata.error + "</div>").append("<div class='status message'>" + userdata.message + "<br>(Click to remove)</div>");
      }
    });
  });
});
