// const = $('#') if i need to declare tings ye 
// important stuffs ye 
// cTemp = CURRENT shorthand tings ye

const apiKey = "c742f6a434aba29ee3de171e2674ca24"; 
const inputL = $('#citySearch');
const cTemp = $('#temp')
const cWind= $('#wind')
const cHumid= $('#humidity')
const cUv= $('#uv')
const historyL = $('#historyEl')
let searchHistory = JSON.parse(localStorage.getItem('search')) || []; 
const clearBtn = $('#clear')
console.log(searchHistory);
let searchForm  = $('#searchBtn');
const cCity = $('#cityName')
// cCity is added to the url, so when typed out, we grab the name an add it to city
var geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cCity},{state code},{country code}&limit={limit}&appid=${apiKey}`

// lets grab the users input! aka, searched city 
function getWeather (cCity) {
  


}










// function weatherNow () {


//   var lat = position.coords.latitude;
//   var long = position.coords.longitude;

//   var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
//   console.log(weatherUrl); 
// }
// console.log("ayo")
// dayjs.extend(window.dayjs_plugin_utc);
// dayjs.extend(window.dayjs_plugin_timezone);

// console.log(searchForm);
// let searchInput
// let todayBox
// let forecastBox
// let searchDisplayBox

// $('#searchForm').on('click', function(e){
//   e.preventDefault();
// }); 

// var lat = position.coords.latitude;
// var long = position.coords.longitude;

// var weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
// function weatherDay (weatherApiUrl) {
//   fetch(weatherDay)
  
//   .then(function (response) {
//     return response.json();
//   })
//   console.log(data)
// }