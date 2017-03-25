/*jshint esversion: 6 */
/*jshint loopfunc: true */
$(document).ready(function() {

  var users = ["comster404", "ESL_SC2", "brunofin", "twitchpresents"];
  var logo, status, name, url, color, activity, z, data;

  function display(logo, status, name, url, color) {
    $("#user-info").prepend('<div class="card trow ' + color + '" id=' + name + '> <img class="sm" src=' + logo + ' >  <div class="content"> <a href=' + url + ' target="_blank"> <h3 class="header">' + name + '</h3> </a><i class="fa fa-circle" aria-hidden="true"></i><span class="status">' + status + '</span><button class="close-stream"><i class="fa fa-times xx"></i></button></div>  </div>');
  }

  function setVars(data, dstream, name, activity) {
    if (data.logo) {
              logo = data.logo;
            } else
            {
              logo = 'https://pbs.twimg.com/profile_images/509073338191183872/fYdty6yd.png';
            }
    if (activity === null) {
      status = "Offline";
      color = "offline";
    } else {
      status = dstream.stream.channel.status;
      color = "online";
    }
    logo = logo;
    url = data._links.channel;
    display(logo, status, name, url, color);
  } // setVars

  var jqxhr = $.getJSON('https://wind-bow.gomix.me/twitch-api/users/freecodecamp/follows/channels?callback=?', function(data) {
    for (let i = 0; i < data.follows.length; i++) {
      var displayName = data.follows[i].channel.display_name;
      users.unshift(displayName);
    }
  })

  .done(function() {
      //  console.log(users);
      users.forEach(function(name) {
        $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + name + '?callback=?', function(data) {
          if (data.error) {
            logo = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1018136/GenericProfile.png';
            name = "Error: " + data.error;
            status = data.message;
            url = "#";
            color = "notfound";
            display(logo, status, name, url, color);
          } else
          {
            $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + name + '?callback=?', function(dstream) {
              var activity = dstream.stream;
              setVars(data, dstream, name, activity);
            }); // getJSON

          }
        }); // getJSON
      }); // forEach
    }) // done

  .fail(function() {
      console.log("error");
    })
    .always(function() {});

}); //doc ready
