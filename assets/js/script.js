// const = $('#') if i need to declare tings ye 
// important stuffs ye 
// cTemp = CURRENT shorthand tings ye
const inputL = $('#citySearch');
const cTemp = $('#temp')
const cWind= $('#wind')
const cHumid= $('#humidity')
const cUv= $('#uv')
var city = '';
var searchCity = [];
const historyL = $('#historyEl')
const clearBtn = $('#clear')
let searchBtn  = $('#searchBtn');
const cCity = $('#cityName')
// cCity is added to the url, so when typed out, we grab the name an add it to city
var weatherApiRoot = `http://api.openweathermap.org`; 
const apiKey = "c742f6a434aba29ee3de171e2674ca24"; 
// lets grab the users input! aka, searched city 
function getWeather (city, apiKey) {
  var queryUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+ city + "&appid=" + apiKey;
    $.ajax({
      url: queryUrl,
      method: 'GET',
    }) .then(function (response) {
      console.log(response)
      var cDate = new Date(response.dt*1000).toLocaleDateString();
        $(cCity).html(response.name +"("+cDate+")");
        // how to convert temp to F^o
        var fHeight = (response.main.temp - 273.15) * 1.8 + 32; 
        $(cTemp).html((fHeight).toFixed(2)+'&#8457');
          // humidity
          var windS = response.wind.speed;
            var windData = (windS*2.37).toFixed(1); 
              $(cWind).html(windData + "Mph"); 
              // uv index, need to make new func
        uvData(response.coord.lat, response.coord.lon);
        // add forecast func outside
        foreCast(response.id);
        if (response.cod==200){
          //stopped here
        }
    })
}

// var iconcode= response.list[((i+1)*8)-1].weather[0].icon;
// var iconurl="https://openweathermap.org/img/wn/"+iconcode+".png";

function foreCast (cityD){
  var qForecastUrl = "api.openweathermap.org/data/2.5/forecast?lat="+ lat + "&lon=" + lon + "&appid=" + apiKey
  var over = false; 
    $.ajax ({
      url: qForecastUrl,
      method: "GET", 

    }).then(function (response){
      for ( i = 0; i < 5 ; i++) { 
        var cDate = new Date ((response.list =[((i + 1)*8 ) - 1 ] .dt)*1000).toLocaleDateString(); //stackOver
        var humidity = response.list[((i + 1)*8 ) - 1].main.humidity;
          var fHeight = (((tmpS-273.5)*1.80)+32).toFixed(2);
            var tmpS = response.list[((i + 1)*8)-1].main.temp;
        $("#forHum" +i ).html(humidity + '%');
        $("#forTemp" +i ).html(fHeight + '&#8457');
        $("#forImage" +i ).html(`<img src = "${imgUrl}">`);
        $("#forDate" +i ).html(cDate); 
      }
    });

  }



function toDisplayWeather(e){
  e.preventDefault();
  if (inputL.value().trim()!==''){
    city = inputL.value().trim();
  getWeather(city); 
  console.log(city)
  }
}

function look(s){
  for (var i = 0; i < searchCity.length; i++) {
    if (s.toUpperCase() === searchCity[i]){
      return -1;
    }
  }
  return 1; 
}

  
  function UvData (lon, lat){
    var uvUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
  //   var lat = position.coords.latitude;
  // var lon = position.coords.longitude;

    $.ajax({
      url: uvUrl,
        method: "GET",
      })
        .then(function (response){
        $(cUV).html(response.val); 
  
      }); 
    }






















// update localStorage function need json.Stringify search history

// searchBtn.addEventListener("click",function() {
//   const searchedCity = inputL.value;
//   getWeather(searchedCity);
//   sHistory.push(searchedCity);
//   localStorage.setItem("search",JSON.stringify(sHistory));
//   rendersHistory();
// })





// renHistory();
// if (sHistory.length > 0) {
//     getWeather(sHistory[sHistory.length - 1]);
// }


// function renHistory() {
//   historyL.innerHTML = "";
//   for (let i = 0; i< sHistory.length; i++) {
//       const historyI = document.createElement("input");
//       historyI.setAttribute("type","text");
//       historyI.setAttribute("readonly",true);
//       historyI.setAttribute("class", "form-control d-block bg-white");
//       historyI.setAttribute("value", sHistory[i]);
//       historyI.addEventListener("click",function() {
//           getWeather(historyI.value);
//       })
//       historyL.append(historyI);
//   }
  
//   renHistory(); 
//     if (sHistory.length > 0)
//       getWeather(sHistory[sHistory.length - 1]); 

// }



// // clearEl.addEventListener("click",function() {
// //   searchHistory = [];
// //   renderSearchHistory();
// // })

// // pull history from localStorage function  parse the .json



// // function for 5 day for loops 


// // for moment js
// dayjs.extend(window.dayjs_plugin_utc);
// dayjs.extend(window.dayjs_plugin_timezone);




// // function weatherNow () {


// //   var lat = position.coords.latitude;
// //   var long = position.coords.longitude;

// //   var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
// //   console.log(weatherUrl); 
// // }
// // console.log("ayo")

// // console.log(searchBtn);
// // let searchInput
// // let todayBox
// // let forecastBox
// // let searchDisplayBox

// // $('#searchBtn').on('click', function(e){
// //   e.preventDefault();
// // }); 

// // var lat = position.coords.latitude;
// // var long = position.coords.longitude;

// // var weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
// // function weatherDay (weatherApiUrl) {
// //   fetch(weatherDay)
  
// //   .then(function (response) {
// //     return response.json();
// //   })
// //   console.log(data)
// // }