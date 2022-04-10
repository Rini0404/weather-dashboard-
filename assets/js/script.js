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
        $(cCity).html(response.name +"("+date+")");
        // how to convert temp to F^o
        var fheight = (response.main.temp - 273.15) * 1.8 + 32; 
        $(cTemp).html((fheight).toFixed(2)+'&#8457');
          // humidity
          var windS = response.wind.speed;
          //  var for windspeed
    })
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