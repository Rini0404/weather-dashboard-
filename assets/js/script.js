const searchHistory =[]; 
const weatherApiUrl = "https://api.openweathermap.org/"; 
const apiKey = "c742f6a434aba29ee3de171e2674ca24"; 


console.log("ayo")
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

let searchForm  = $('#searchBtn');
console.log(searchForm);
let searchInput
let todayBox
let forecastBox
let searchDisplayBox

$('#searchForm').on('click', function(e){
  e.preventDefault();
}); 

var weatherApi = ``; 

function weatherDay (weatherApiUrl) {
  fetch(weatherApi)
  .then(function (response) {
    return response.json();
  })
  console.log(data)
}