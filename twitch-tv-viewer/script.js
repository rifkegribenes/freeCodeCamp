/*jshint esversion: 6 */
/*jshint loopfunc: true */
$(document).ready(function() {

  var users = ["comster404", "ESL_SC2", "brunofin", "twitchpresents"];
  var logo, status, name, url, description, color;

  function display(logo, status, name, url, description, color) {
    $("#user-info").prepend('<div class="card trow ' + color +'" id=' + name + '> <a class="image" href=' + url + ' target="_blank"> <img class="sm" src=' + logo + ' > </a> <div class="content"> <div class="header">' + name + '</div> <div class="description">' + description + '</div> <div class="status">' + status + '</div></div>  </div>');
         //     $("#"+name).addClass(color);
  }

  function getChannel(name, status, color) {
    $.ajax({
          type: "GET",
          url: "https://api.twitch.tv/kraken/channels/" + name,
          headers: {
            'Client-ID': '2qtn5ox1yyjj7332a1x56ksda429rx'
          },
          success: function(y) {
            url = y.url;
            if (y.game) {
              description = y.game;
            } else {
              description = '';
            }
            if (y.logo) {
              logo = y.logo;
            } else {
              logo = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1018136/GenericProfile.png';
            }
            display(logo, status, name, url, description, color);
          },
          error: function() {
            logo = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1018136/GenericProfile.png';
            name = y.message;
            status = y.error;
            url = y.url;
            display(logo, status, name);
          }
        });
  }

  var jqxhr = $.getJSON('https://wind-bow.gomix.me/twitch-api/users/freecodecamp/follows/channels?callback=?', function(data) {
    for (let i = 0; i < data.follows.length; i++) {
      var displayName = data.follows[i].channel.display_name;
      users.push(displayName);
    }
  })

  .done(function() {
    console.log(users);
      $.when.apply($, $.map(users, function(_user) {
        $.ajax({
          type: "GET",
          url: "https://api.twitch.tv/kraken/streams/" + _user,
          headers: {
            'Client-ID': '2qtn5ox1yyjj7332a1x56ksda429rx'
          },
          success: function(x) {
            name = _user;
            if (x.stream === null) {
              status = "Offline";
              color = "offline";
              getChannel(name, status, color);
            } else {
              status = x.stream.channel.status;
              color = "online";
              getChannel(name, status, color);
            }
          },
          error: function() {
            console.log(name + " doesn't exist");
            status = "Channel doesn't exist";
            color = "notfound";
            logo = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1018136/GenericProfile.png';
            url = "#";
            description = "";
            display(logo, status, name, url, description, color);
          }
        });
      })); // when.apply
    }) //done

  .fail(function() {
      console.log("error");
    })
    .always(function() {
    });

}); //doc ready
