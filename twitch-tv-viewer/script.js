/*jshint esversion: 6 */
$(document).ready(function() {

 var users = ["comster404", "ESL_SC2", "brunofin", "twitchpresents"];
 var removed = [];
 var logo, status, name, url, color, activity, z, data;

 function display(logo, status, name, url, color) {
    $("#user-info").prepend('<div class="card trow ' + color + '" id=' + name + '> <img class="sm" src=' + logo + ' >  <div class="content"> <a href=' + url + ' target="_blank"> <h3 class="header">' + name + '</h3> </a><i class="fa fa-circle" aria-hidden="true"></i><span class="status">' + status + '</span><button type="button" class="close-x ' + name + '" aria-label="Close"><i class="fa fa-times xx" aria-hidden="true"></i></button></div>  </div>');

  $('.close-x').click(function() {
    $(this).parents('.card').slideUp();
    var remName = ($(this).attr('class').split(' ').pop());
    if (removed.indexOf(remName) === -1) {
    removed.push(remName);
    }
    if (users.indexOf(remName) > -1) {
    users.splice(users.indexOf(remName), 1);
}
}); //remove
  } //display

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
  } //setVars

 function getData(name) {
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
    } //getData

  $('.add').click(function() {
    name = $('.search').val();
    getData(name);
    users.unshift(name);
    $(".search").val("");
  });

   $('.all').click(function() {
      console.log("all: " + users);
      console.log("removed: " + removed);
    users.forEach(function(name) {
      $('#'+name).show();
    $('li').removeClass('active');
    $('li').attr("aria-expanded","false");
    $('li.all').addClass('active');
    $('.all').attr("aria-expanded","true");
        }); // forEach
  });

    $('.on').click(function() {
      console.log("on: " + users);
      console.log("removed: " + removed);
    users.forEach(function(name) {
      if (removed.indexOf(name) > -1) {
      $('#'+name).show();
    }
      if ($('#'+name).hasClass('online')) {
      $('#'+name).show();
    } else {
      $('#'+name).hide();
    }
    $('.notfound').hide();
    $('li').removeClass('active');
    $('li').attr("aria-expanded","false");
    $('li.on').addClass('active');
    $('.on').attr("aria-expanded","true");
    }); //forEach
  });

    $('.off').click(function() {
      console.log("off: " + users);
      console.log("removed: " + removed);
    users.forEach(function(name) {
      if (removed.indexOf(name) > -1) {
      $('#'+name).show();
    }
      if ($('#'+name).hasClass('offline')) {
      $('#'+name).show();
    } else {
      $('#'+name).hide();
    }
    $('.notfound').hide();
    $('li').removeClass('active');
    $('li').attr("aria-expanded","false");
    $('li.off').addClass('active');
    $('.off').attr("aria-expanded","true");
    }); //forEach
  });

 var jqxhr = $.getJSON('https://wind-bow.gomix.me/twitch-api/users/freecodecamp/follows/channels?callback=?', function(data) {
    for (let i = 0; i < data.follows.length; i++) {
      var displayName = data.follows[i].channel.display_name;
      users.unshift(displayName);
    }
  })

  .done(function() {
      users.forEach(function(name) {
        getData(name);
        }); // forEach
    }) //done

  .fail(function() {
      console.log("error");
    })
  .always(function() {});

}); //doc ready
