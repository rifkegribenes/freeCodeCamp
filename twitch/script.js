/*jshint esversion: 6 */
/*jshint loopfunc: true */
$(document).ready(function() {
var url = "https://api.twitch.tv/kraken/streams/freecodecamp?callback=?client_id=2qtn5ox1yyjj7332a1x56ksda429rx";
var users = ["comster404", "ESL_SC2", "brunofin", "twitchpresents"];

function display(logo, name, status) {
    $("#user-info").prepend("<div class = 'row'>" + "<div class='col-md-4>" + "<img src='" + logo + "'>" + "</div>" + "<div class='col-md-4>" + name + "</div>" + "<div class='col-md-4>" + status + "</div></div>");
  }

var jqxhr = $.getJSON('https://wind-bow.gomix.me/twitch-api/users/freecodecamp/follows/channels?callback=?', function(data) {
  for (let i=0; i<data.follows.length; i++) {
    var displayName = data.follows[i].channel.display_name;
    users.push(displayName);
  }
  console.log(users);
})

.done(function() {
var logo;
var status;
var name;
$.when.apply($, $.map(users, function(_user) {
        return $.ajax({
          type: "GET",
          url: "https://api.twitch.tv/kraken/streams/" + _user,
          headers: {
            'Client-ID': '2qtn5ox1yyjj7332a1x56ksda429rx'
          },
          success: function(data3) {
            if (data3.error) {
              logo = "placeholder for file not found";
              name = data3.message;
              status = data3.error;
              display(logo, name, status);
            }

            if (data3.stream === null) {
              $.ajax({
                type: "GET",
                dataType:"json",
                url: data3._links.channel,
                headers: {
                  'Client-ID': '2qtn5ox1yyjj7332a1x56ksda429rx'
                },
                success: function(data4) {
                  if (data4.error) {
                    status = "OFFLINE";
                    logo = data4.logo;
                    name = data4.display_name;
                    if (logo === null) {
                      logo = "placeholder for no logo";
                    }
                    display(logo, name, status);
                  }
                }

              });
            }
          }
        });
      })); // when.apply 1

$.when.apply($, $.map(users, function(_user) {
        return $.ajax({
          type: "GET",
          dataType:"json",
          url: "https://api.twitch.tv/kraken/streams/" + _user,
          headers: {
            'Client-ID': '2qtn5ox1yyjj7332a1x56ksda429rx'
          },
          success: function(data5) {
            console.log(data5);
            if (data5.error) {
              logo = data4.stream.channel.logo;
              status = data4.stream.channel.status;
              name = data4.stream.channel.display_name;
              display(logo, name, status);
            } // if
          } // success
        }); //ajax
})); // when.apply 2

})

  .fail(function() {
    console.log( "error" );
  })
.always(function() {
    console.log( "complete" );
  });




});


  /*
    $.getJSON(url2).done(function(data3){
    var logo;
      var status;
      var name;
      if (data3.stream===null) {
        logo = "placeholder";
        name = data3.message;
        status = data3.error;
        $("#user-info").prepend("<div class='row'><div class='col-md-4'><img src='"+logo+"'></div><div class='col-md-4'>User "+users[i]+" does not exist.</div><div class='col-md-4'>"+status+"</div></div>");
      }
});
  }
});


$.ajax({
 type: 'GET',
 url: 'https://api.twitch.tv/kraken/channels/twitch',
 headers: {
   'Client-ID': '2qtn5ox1yyjj7332a1x56ksda429rx'
 },
 success: function(data2) {
 }
});

// twitch client id: 2qtn5ox1yyjj7332a1x56ksda429rx

});

*/
