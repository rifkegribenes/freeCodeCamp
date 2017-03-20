/*global $*/
$(document).ready(function() {
  var url;
  var temp;
  var units;
  var wD;
  var city;
  var country;
  var countryCode;
  var iconCodes = [
    {
    icon: "wi-storm-showers",
    description: "thunderstorm with light rain"
  }, {
    icon: "wi-thunderstorm",
    description: "thunderstorm with rain"
  }, {
    icon: "wi-thunderstorm",
    description: "thunderstorm with heavy rain"
  }, {
    icon: "wi-storm-showers",
    description: "light thunderstorm"
  }, {
    icon: "wi-thunderstorm",
    description: "thunderstorm"
  }, {
    icon: "wi-thunderstorm",
    description: "heavy thunderstorm"
  }, {
    icon: "wi-thunderstorm",
    description: "ragged thunderstorm"
  }, {
    icon: "wi-storm-showers",
    description: "thunderstorm with light drizzle"
  }, {
    icon: "wi-storm-showers",
    description: "thunderstorm with drizzle"
  }, {
    icon: "wi-storm-showers",
    description: "thunderstorm with heavy drizzle"
  }, {
    icon: "wi-sprinkle",
    description: "light intensity drizzle"
  }, {
    icon: "wi-sprinkle",
    description: "drizzle"
  }, {
    icon: "wi-showers",
    description: "heavy intensity drizzle"
  }, {
    icon: "wi-sprinkle",
    description: "light intensity drizzle rain"
  }, {
    icon: "wi-sprinkle",
    description: "drizzle rain"
  }, {
    icon: "wi-showers",
    description: "heavy intensity drizzle rain"
  }, {
    icon: "wi-showers",
    description: "shower rain and drizzle"
  }, {
    icon: "wi-showers",
    description: "heavy shower rain and drizzle"
  }, {
    icon: "wi-showers",
    description: "shower drizzle"
  }, {
    icon: "wi-rain",
    description: "light rain"
  }, {
    icon: "wi-rain",
    description: "moderate rain"
  }, {
    icon: "wi-rain",
    description: "heavy intensity rain"
  }, {
    icon: "wi-rain",
    description: "very heavy rain"
  }, {
    icon: "wi-rain",
    description: "extreme rain"
  }, {
    icon: "wi-rain-mix",
    description: "freezing rain"
  }, {
    icon: "wi-showers",
    description: "light intensity shower rain"
  }, {
    icon: "wi-showers",
    description: "shower rain"
  }, {
    icon: "wi-rain",
    description: "heavy intensity shower rain"
  }, {
    icon: "wi-rain",
    description: "ragged shower rain"
  }, {
    icon: "wi-snow",
    description: "light snow"
  }, {
    icon: "wi-snowflake-cold",
    description: "snow"
  }, {
    icon: "wi-snowflake-cold",
    description: "heavy snow"
  }, {
    icon: "wi-sleet",
    description: "sleet"
  }, {
    icon: "wi-sleet",
    description: "shower sleet"
  }, {
    icon: "wi-rain-mix",
    description: "light rain and snow"
  }, {
    icon: "wi-rain-mix",
    description: "rain and snow"
  }, {
    icon: "wi-snow",
    description: "light shower snow"
  }, {
    icon: "wi-snowflake-cold",
    description: "shower snow"
  }, {
    icon: "wi-snowflake-cold",
    description: "heavy shower snow"
  }, {
    icon: "wi-day-fog",
    description: "mist"
  }, {
    icon: "wi-smoke",
    description: "smoke"
  }, {
    icon: "wi-day-haze",
    description: "haze"
  }, {
    icon: "wi-sandstorm",
    description: "sand, dust whirls"
  }, {
    icon: "wi-fog",
    description: "fog"
  }, {
    icon: "wi-sandstorm",
    description: "sand"
  }, {
    icon: "wi-dust",
    description: "dust"
  }, {
    icon: "wi-volcano",
    description: "volcanic ash"
  }, {
    icon: "wi-strong-wind",
    description: "squalls"
  }, {
    icon: "wi-tornado",
    description: "tornado"
  }, {
    icon: "wi-day-sunny",
    description: "clear sky"
  }, {
    icon: "wi-cloud",
    description: "few clouds"
  }, {
    icon: "wi-day-cloudy",
    description: "scattered clouds"
  }, {
    icon: "wi-day-cloudy",
    description: "broken clouds"
  }, {
    icon: "wi-cloudy",
    description: "overcast clouds"
  }, {
    icon: "wi-tornado",
    description: "tornado"
  }, {
    icon: "wi-storm-warning",
    description: "tropical storm"
  }, {
    icon: "wi-hurricane",
    description: "hurricane"
  }, {
    icon: "wi-thermometer-exterior",
    description: "cold"
  }, {
    icon: "wi-hot",
    description: "hot"
  }, {
    icon: "wi-windy",
    description: "windy"
  }, {
    icon: "wi-hail",
    description: "hail"
  }, {
    icon: "",
    description: "calm"
  }, {
    icon: "wi-windy",
    description: "light breeze"
  }, {
    icon: "wi-windy",
    description: "gentle breeze"
  }, {
    icon: "wi-windy",
    description: "moderate breeze"
  }, {
    icon: "wi-windy",
    description: "fresh breeze"
  }, {
    icon: "wi-windy",
    description: "strong breeze"
  }, {
    icon: "wi-strong-wind",
    description: "high wind, near gale"
  }, {
    icon: "wi-strong-wind",
    description: "gale"
  }, {
    icon: "wi-strong-wind",
    description: "severe gale"
  }, {
    icon: "wi-storm-warning",
    description: "storm"
  }, {
    icon: "wi-storm-warning",
    description: "violent storm"
  }, {
    icon: "wi-hurricane",
    description: "hurricane"
  }, {
    icon: "wi-storm-showers",
    description: "thunderstorm with light rain"
  }, {
    icon: "wi-thunderstorm",
    description: "thunderstorm with rain"
  }, {
    icon: "wi-thunderstorm",
    description: "thunderstorm with heavy rain"
  }, {
    icon: "wi-storm-showers",
    description: "light thunderstorm"
  }, {
    icon: "wi-thunderstorm",
    description: "thunderstorm"
  }, {
    icon: "wi-thunderstorm",
    description: "heavy thunderstorm"
  }, {
    icon: "wi-thunderstorm",
    description: "ragged thunderstorm"
  }, {
    icon: "wi-storm-showers",
    description: "thunderstorm with light drizzle"
  }, {
    icon: "wi-storm-showers",
    description: "thunderstorm with drizzle"
  }, {
    icon: "wi-storm-showers",
    description: "thunderstorm with heavy drizzle"
  }, {
    icon: "wi-sprinkle",
    description: "light intensity drizzle"
  }, {
    icon: "wi-sprinkle",
    description: "drizzle"
  }, {
    icon: "wi-showers",
    description: "heavy intensity drizzle"
  }, {
    icon: "wi-sprinkle",
    description: "light intensity drizzle rain"
  }, {
    icon: "wi-sprinkle",
    description: "drizzle rain"
  }, {
    icon: "wi-showers",
    description: "heavy intensity drizzle rain"
  }, {
    icon: "wi-showers",
    description: "shower rain and drizzle"
  }, {
    icon: "wi-showers",
    description: "heavy shower rain and drizzle"
  }, {
    icon: "wi-showers",
    description: "shower drizzle"
  }, {
    icon: "wi-rain",
    description: "light rain"
  }, {
    icon: "wi-rain",
    description: "moderate rain"
  }, {
    icon: "wi-rain",
    description: "heavy intensity rain"
  }, {
    icon: "wi-rain",
    description: "very heavy rain"
  }, {
    icon: "wi-rain",
    description: "extreme rain"
  }, {
    icon: "wi-rain-mix",
    description: "freezing rain"
  }, {
    icon: "wi-showers",
    description: "light intensity shower rain"
  }, {
    icon: "wi-showers",
    description: "shower rain"
  }, {
    icon: "wi-rain",
    description: "heavy intensity shower rain"
  }, {
    icon: "wi-rain",
    description: "ragged shower rain"
  }, {
    icon: "wi-snow",
    description: "light snow"
  }, {
    icon: "wi-snowflake-cold",
    description: "snow"
  }, {
    icon: "wi-snowflake-cold",
    description: "heavy snow"
  }, {
    icon: "wi-sleet",
    description: "sleet"
  }, {
    icon: "wi-sleet",
    description: "shower sleet"
  }, {
    icon: "wi-rain-mix",
    description: "light rain and snow"
  }, {
    icon: "wi-rain-mix",
    description: "rain and snow"
  }, {
    icon: "wi-snow",
    description: "light shower snow"
  }, {
    icon: "wi-snowflake-cold",
    description: "shower snow"
  }, {
    icon: "wi-snowflake-cold",
    description: "heavy shower snow"
  }, {
    icon: "wi-day-fog",
    description: "mist"
  }, {
    icon: "wi-smoke",
    description: "smoke"
  }, {
    icon: "wi-day-haze",
    description: "haze"
  }, {
    icon: "wi-sandstorm",
    description: "sand, dust whirls"
  }, {
    icon: "wi-fog",
    description: "fog"
  }, {
    icon: "wi-sandstorm",
    description: "sand"
  }, {
    icon: "wi-dust",
    description: "dust"
  }, {
    icon: "wi-volcano",
    description: "volcanic ash"
  }, {
    icon: "wi-strong-wind",
    description: "squalls"
  }, {
    icon: "wi-tornado",
    description: "tornado"
  }, {
    icon: "wi-day-sunny",
    description: "clear sky"
  }, {
    icon: "wi-cloud",
    description: "few clouds"
  }, {
    icon: "wi-day-cloudy",
    description: "scattered clouds"
  }, {
    icon: "wi-day-cloudy",
    description: "broken clouds"
  }, {
    icon: "wi-cloudy",
    description: "overcast clouds"
  }, {
    icon: "wi-tornado",
    description: "tornado"
  }, {
    icon: "wi-storm-warning",
    description: "tropical storm"
  }, {
    icon: "wi-hurricane",
    description: "hurricane"
  }, {
    icon: "wi-thermometer-exterior",
    description: "cold"
  }, {
    icon: "wi-hot",
    description: "hot"
  }, {
    icon: "wi-windy",
    description: "windy"
  }, {
    icon: "wi-hail",
    description: "hail"
  }, {
    icon: "",
    description: "calm"
  }, {
    icon: "wi-windy",
    description: "light breeze"
  }, {
    icon: "wi-windy",
    description: "gentle breeze"
  }, {
    icon: "wi-windy",
    description: "moderate breeze"
  }, {
    icon: "wi-windy",
    description: "fresh breeze"
  }, {
    icon: "wi-windy",
    description: "strong breeze"
  }, {
    icon: "wi-strong-wind",
    description: "high wind, near gale"
  }, {
    icon: "wi-strong-wind",
    description: "gale"
  }, {
    icon: "wi-strong-wind",
    description: "severe gale"
  }, {
    icon: "wi-storm-warning",
    description: "storm"
  }, {
    icon: "wi-storm-warning",
    description: "violent storm"
  }, {
    icon: "wi-hurricane",
    description: "hurricane"
  }];
  var countryCodes = [
    {ccode: "AF", cname: "Afghanistan"},
{ccode: "AX", cname: "Aland Islands"},
{ccode: "AL", cname: "Albania"},
{ccode: "DZ", cname: "Algeria"},
{ccode: "AS", cname: "American Samoa"},
{ccode: "AD", cname: "Andorra"},
{ccode: "AO", cname: "Angola"},
{ccode: "AI", cname: "Anguilla"},
{ccode: "AQ", cname: "Antarctica"},
{ccode: "AG", cname: "Antigua and Barbuda"},
{ccode: "AR", cname: "Argentina"},
{ccode: "AM", cname: "Armenia"},
{ccode: "AW", cname: "Aruba"},
{ccode: "AU", cname: "Australia"},
{ccode: "AT", cname: "Austria"},
{ccode: "AZ", cname: "Azerbaijan"},
{ccode: "BS", cname: "Bahamas"},
{ccode: "BH", cname: "Bahrain"},
{ccode: "BD", cname: "Bangladesh"},
{ccode: "BB", cname: "Barbados"},
{ccode: "BY", cname: "Belarus"},
{ccode: "BE", cname: "Belgium"},
{ccode: "BZ", cname: "Belize"},
{ccode: "BJ", cname: "Benin"},
{ccode: "BM", cname: "Bermuda"},
{ccode: "BT", cname: "Bhutan"},
{ccode: "BO", cname: "Bolivia"},
{ccode: "BA", cname: "Bosnia and Herzegovina"},
{ccode: "BW", cname: "Botswana"},
{ccode: "BV", cname: "Bouvet Island"},
{ccode: "BR", cname: "Brazil"},
{ccode: "VG", cname: "British Virgin Islands"},
{ccode: "IO", cname: "British Indian Ocean Territory"},
{ccode: "BN", cname: "Brunei Darussalam"},
{ccode: "BG", cname: "Bulgaria"},
{ccode: "BF", cname: "Burkina Faso"},
{ccode: "BI", cname: "Burundi"},
{ccode: "KH", cname: "Cambodia"},
{ccode: "CM", cname: "Cameroon"},
{ccode: "CA", cname: "Canada"},
{ccode: "CV", cname: "Cape Verde"},
{ccode: "KY", cname: "Cayman Islands"},
{ccode: "CF", cname: "Central African Republic"},
{ccode: "TD", cname: "Chad"},
{ccode: "CL", cname: "Chile"},
{ccode: "CN", cname: "China"},
{ccode: "HK", cname: "Hong Kong"},
{ccode: "MO", cname: "Macao"},
{ccode: "CX", cname: "Christmas Island"},
{ccode: "CC", cname: "Cocos (Keeling) Islands"},
{ccode: "CO", cname: "Colombia"},
{ccode: "KM", cname: "Comoros"},
{ccode: "CG", cname: "Congo (Brazzaville)"},
{ccode: "CD", cname: "Congo"},
{ccode: "CK", cname: "Cook Islands"},
{ccode: "CR", cname: "Costa Rica"},
{ccode: "CI", cname: "Côte d'Ivoire"},
{ccode: "HR", cname: "Croatia"},
{ccode: "CU", cname: "Cuba"},
{ccode: "CY", cname: "Cyprus"},
{ccode: "CZ", cname: "Czech Republic"},
{ccode: "DK", cname: "Denmark"},
{ccode: "DJ", cname: "Djibouti"},
{ccode: "DM", cname: "Dominica"},
{ccode: "DO", cname: "Dominican Republic"},
{ccode: "EC", cname: "Ecuador"},
{ccode: "EG", cname: "Egypt"},
{ccode: "SV", cname: "El Salvador"},
{ccode: "GQ", cname: "Equatorial Guinea"},
{ccode: "ER", cname: "Eritrea"},
{ccode: "EE", cname: "Estonia"},
{ccode: "ET", cname: "Ethiopia"},
{ccode: "FK", cname: "Falkland Islands (Malvinas)"},
{ccode: "FO", cname: "Faroe Islands"},
{ccode: "FJ", cname: "Fiji"},
{ccode: "FI", cname: "Finland"},
{ccode: "FR", cname: "France"},
{ccode: "GF", cname: "French Guiana"},
{ccode: "PF", cname: "French Polynesia"},
{ccode: "TF", cname: "French Southern Territories"},
{ccode: "GA", cname: "Gabon"},
{ccode: "GM", cname: "Gambia"},
{ccode: "GE", cname: "Georgia"},
{ccode: "DE", cname: "Germany"},
{ccode: "GH", cname: "Ghana"},
{ccode: "GI", cname: "Gibraltar"},
{ccode: "GR", cname: "Greece"},
{ccode: "GL", cname: "Greenland"},
{ccode: "GD", cname: "Grenada"},
{ccode: "GP", cname: "Guadeloupe"},
{ccode: "GU", cname: "Guam"},
{ccode: "GT", cname: "Guatemala"},
{ccode: "GG", cname: "Guernsey"},
{ccode: "GN", cname: "Guinea"},
{ccode: "GW", cname: "Guinea-Bissau"},
{ccode: "GY", cname: "Guyana"},
{ccode: "HT", cname: "Haiti"},
{ccode: "HM", cname: "Heard Island and Mcdonald Islands"},
{ccode: "VA", cname: "Holy See (Vatican City State)"},
{ccode: "HN", cname: "Honduras"},
{ccode: "HU", cname: "Hungary"},
{ccode: "IS", cname: "Iceland"},
{ccode: "IN", cname: "India"},
{ccode: "ID", cname: "Indonesia"},
{ccode: "IR", cname: "Iran"},
{ccode: "IQ", cname: "Iraq"},
{ccode: "IE", cname: "Ireland"},
{ccode: "IM", cname: "Isle of Man"},
{ccode: "IL", cname: "Israel"},
{ccode: "IT", cname: "Italy"},
{ccode: "JM", cname: "Jamaica"},
{ccode: "JP", cname: "Japan"},
{ccode: "JE", cname: "Jersey"},
{ccode: "JO", cname: "Jordan"},
{ccode: "KZ", cname: "Kazakhstan"},
{ccode: "KE", cname: "Kenya"},
{ccode: "KI", cname: "Kiribati"},
{ccode: "KP", cname: "Democratic People's Republic of Korea"},
{ccode: "KR", cname: "Korea"},
{ccode: "KW", cname: "Kuwait"},
{ccode: "KG", cname: "Kyrgyzstan"},
{ccode: "LA", cname: "Lao PDR"},
{ccode: "LV", cname: "Latvia"},
{ccode: "LB", cname: "Lebanon"},
{ccode: "LS", cname: "Lesotho"},
{ccode: "LR", cname: "Liberia"},
{ccode: "LY", cname: "Libya"},
{ccode: "LI", cname: "Liechtenstein"},
{ccode: "LT", cname: "Lithuania"},
{ccode: "LU", cname: "Luxembourg"},
{ccode: "MK", cname: "Macedonia"},
{ccode: "MG", cname: "Madagascar"},
{ccode: "MW", cname: "Malawi"},
{ccode: "MY", cname: "Malaysia"},
{ccode: "MV", cname: "Maldives"},
{ccode: "ML", cname: "Mali"},
{ccode: "MT", cname: "Malta"},
{ccode: "MH", cname: "Marshall Islands"},
{ccode: "MQ", cname: "Martinique"},
{ccode: "MR", cname: "Mauritania"},
{ccode: "MU", cname: "Mauritius"},
{ccode: "YT", cname: "Mayotte"},
{ccode: "MX", cname: "Mexico"},
{ccode: "FM", cname: "Micronesia"},
{ccode: "MD", cname: "Moldova"},
{ccode: "MC", cname: "Monaco"},
{ccode: "MN", cname: "Mongolia"},
{ccode: "ME", cname: "Montenegro"},
{ccode: "MS", cname: "Montserrat"},
{ccode: "MA", cname: "Morocco"},
{ccode: "MZ", cname: "Mozambique"},
{ccode: "MM", cname: "Myanmar"},
{ccode: "NA", cname: "Namibia"},
{ccode: "NR", cname: "Nauru"},
{ccode: "NP", cname: "Nepal"},
{ccode: "NL", cname: "Netherlands"},
{ccode: "AN", cname: "Netherlands Antilles"},
{ccode: "NC", cname: "New Caledonia"},
{ccode: "NZ", cname: "New Zealand"},
{ccode: "NI", cname: "Nicaragua"},
{ccode: "NE", cname: "Niger"},
{ccode: "NG", cname: "Nigeria"},
{ccode: "NU", cname: "Niue"},
{ccode: "NF", cname: "Norfolk Island"},
{ccode: "MP", cname: "Northern Mariana Islands"},
{ccode: "NO", cname: "Norway"},
{ccode: "OM", cname: "Oman"},
{ccode: "PK", cname: "Pakistan"},
{ccode: "PW", cname: "Palau"},
{ccode: "PS", cname: "Palestine"},
{ccode: "PA", cname: "Panama"},
{ccode: "PG", cname: "Papua New Guinea"},
{ccode: "PY", cname: "Paraguay"},
{ccode: "PE", cname: "Peru"},
{ccode: "PH", cname: "Philippines"},
{ccode: "PN", cname: "Pitcairn"},
{ccode: "PL", cname: "Poland"},
{ccode: "PT", cname: "Portugal"},
{ccode: "PR", cname: "Puerto Rico"},
{ccode: "QA", cname: "Qatar"},
{ccode: "RE", cname: "Réunion"},
{ccode: "RO", cname: "Romania"},
{ccode: "RU", cname: "Russian Federation"},
{ccode: "RW", cname: "Rwanda"},
{ccode: "BL", cname: "Saint-Barthélemy"},
{ccode: "SH", cname: "Saint Helena"},
{ccode: "KN", cname: "Saint Kitts and Nevis"},
{ccode: "LC", cname: "Saint Lucia"},
{ccode: "MF", cname: "Saint-Martin"},
{ccode: "PM", cname: "Saint Pierre and Miquelon"},
{ccode: "VC", cname: "Saint Vincent and Grenadines"},
{ccode: "WS", cname: "Samoa"},
{ccode: "SM", cname: "San Marino"},
{ccode: "ST", cname: "Sao Tome and Principe"},
{ccode: "SA", cname: "Saudi Arabia"},
{ccode: "SN", cname: "Senegal"},
{ccode: "RS", cname: "Serbia"},
{ccode: "SC", cname: "Seychelles"},
{ccode: "SL", cname: "Sierra Leone"},
{ccode: "SG", cname: "Singapore"},
{ccode: "SK", cname: "Slovakia"},
{ccode: "SI", cname: "Slovenia"},
{ccode: "SB", cname: "Solomon Islands"},
{ccode: "SO", cname: "Somalia"},
{ccode: "ZA", cname: "South Africa"},
{ccode: "GS", cname: "South Georgia and the South Sandwich Islands"},
{ccode: "SS", cname: "South Sudan"},
{ccode: "ES", cname: "Spain"},
{ccode: "LK", cname: "Sri Lanka"},
{ccode: "SD", cname: "Sudan"},
{ccode: "SR", cname: "Suriname"},
{ccode: "SJ", cname: "Svalbard and Jan Mayen Islands"},
{ccode: "SZ", cname: "Swaziland"},
{ccode: "SE", cname: "Sweden"},
{ccode: "CH", cname: "Switzerland"},
{ccode: "SY", cname: "Syria"},
{ccode: "TW", cname: "Taiwan"},
{ccode: "TJ", cname: "Tajikistan"},
{ccode: "TZ", cname: "Tanzania"},
{ccode: "TH", cname: "Thailand"},
{ccode: "TL", cname: "Timor-Leste"},
{ccode: "TG", cname: "Togo"},
{ccode: "TK", cname: "Tokelau"},
{ccode: "TO", cname: "Tonga"},
{ccode: "TT", cname: "Trinidad and Tobago"},
{ccode: "TN", cname: "Tunisia"},
{ccode: "TR", cname: "Turkey"},
{ccode: "TM", cname: "Turkmenistan"},
{ccode: "TC", cname: "Turks and Caicos Islands"},
{ccode: "TV", cname: "Tuvalu"},
{ccode: "UG", cname: "Uganda"},
{ccode: "UA", cname: "Ukraine"},
{ccode: "AE", cname: "United Arab Emirates"},
{ccode: "GB", cname: "United Kingdom"},
{ccode: "US", cname: "United States"},
{ccode: "UM", cname: "United States Minor Outlying Islands"},
{ccode: "UY", cname: "Uruguay"},
{ccode: "UZ", cname: "Uzbekistan"},
{ccode: "VU", cname: "Vanuatu"},
{ccode: "VE", cname: "Venezuela"},
{ccode: "VN", cname: "Viet Nam"},
{ccode: "VI", cname: "Virgin Islands"},
{ccode: "WF", cname: "Wallis and Futuna Islands"},
{ccode: "EH", cname: "Western Sahara"},
{ccode: "YE", cname: "Yemen"},
{ccode: "ZM", cname: "Zambia"},
{ccode: "ZW", cname: "Zimbabwe"},
    
  ];

  function lookUpIcon(wD) {
    for (var i = 0; i < iconCodes.length; i++) {
      if (iconCodes[i].description === wD) {
        return iconCodes[i].icon;
      }
    }
  }
  
  function lookUpCountry(countryCode) {
    for (var i = 0; i < countryCodes.length; i++) {
      if (countryCodes[i].ccode === countryCode) {
        return countryCodes[i].cname;
      }
    }
  }
  
  

  $.getJSON("http://ip-api.com/json", function(json) {
    
    var locationInfo = json;
    console.log('working ' + locationInfo);
    var city = locationInfo.city;
    country = locationInfo.country;
    var latitude = (locationInfo.lat).toFixed(2);
    var longitude = (locationInfo.lon).toFixed(2);
    url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=imperial&APPID=fad75841a98c07a47eeaac02d41027e4";
    $("#city").html(city + ",<br>" + country);
  })

  .done(function() {
    $.getJSON(url, function(data) {
      
      var weatherInfo = data;
      temp = Math.round(weatherInfo.main.temp);
      wD = weatherInfo.weather[0].description;
  $("#conditions").html(wD);
      $("#temp").html(temp + "&deg; F");
      units = "fahrenheit";
      $("#w-icon").addClass(lookUpIcon(wD));
    });
  });

  function toCelsius(temp) {
    var celsius = Math.round((5 / 9) * (temp - 32));
    return celsius;
  }

  $("#temp").on("click", function() {
    if (units === "fahrenheit") {
      $("#temp").html(toCelsius(temp) + "&deg; C");
      units = "celsius";
    } else {
      $("#temp").html(temp + " &deg; F");
      units = "fahrenheit";
    }
  });

  //lookup different city function

  $(".go").click(function() {
    city = $(".search").val();
   $(".search").val("");
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=fad75841a98c07a47eeaac02d41027e4", function(data1) {
      var rawJson = JSON.stringify(data1);
      var weatherInfo = JSON.parse(rawJson);
      country = (lookUpCountry(weatherInfo.sys.country));
      $("#city").html(city + ",<br>" + country);
      temp = Math.round(weatherInfo.main.temp);
      wD = weatherInfo.weather[0].description;
      $("#conditions").html(wD);
      $("#temp").html(temp + "&deg; F");
      units = "fahrenheit";
      console.log("city call lookUpIcon = " + (lookUpIcon(wD)));
      $("#w-icon").removeClass();
      $("#w-icon").addClass("wi " + lookUpIcon(wD));
    });
  });
});