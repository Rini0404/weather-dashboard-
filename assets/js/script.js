// const = $('#') if i need to declare tings ye 
// important stuffs ye 
// cTemp = CURRENT shorthand tings ye
const inputL = $('#citySearch');
const cTemp = $('#temp')
const cWind= $('#wind')
const cHumid= $('#humidity')
const cUv= $('#uv')
const historyL = $('#historyEl')
let sHistory = JSON.parse(localStorage.getItem('search')) || []; 
const clearBtn = $('#clear')
let searchForm  = $('#searchBtn');
const cCity = $('#cityName')
// cCity is added to the url, so when typed out, we grab the name an add it to city
var weatherApiRoot = `http://api.openweathermap.org`; 
// var queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cCity}&appid=${apiKey}`;
const apiKey = "c742f6a434aba29ee3de171e2674ca24"; 
// lets grab the users input! aka, searched city 
function getWeather (cCity) {
  
  $.ajax({
    url: queryUrl,
    method: "GET", 
  })
  .then(function (response) {
    // more vars for  
    console.log(response);
    const currentDate = new Date(response.data.dt*1000) ; 
    console.log(currentDate)
    const day = currentDate.getDate(); 
      const month = currentDate.getMonth() + 1; 
        const year = currentDate.getFullYear(); 
    cCity.innerHTML = response.data.name + `$('month') / $('day) / $('year')`
    console.log(cCity)

  })

  
// if conditionals 

}

function renderSearch (){
  // ().innerHTML
  // for loop
}

// update localStorage function need json.Stringify search history

searchBtn.addEventListener("click",function() {
  const searchedCity = inputL.value;
  getWeather(searchedCity);
  sHistory.push(searchedCity);
  localStorage.setItem("search",JSON.stringify(sHistory));
  rendersHistory();
})





renHistory();
if (sHistory.length > 0) {
    getWeather(sHistory[sHistory.length - 1]);
}


function renHistory() {
  historyL.innerHTML = "";
  for (let i = 0; i< sHistory.length; i++) {
      const historyI = document.createElement("input");
      historyI.setAttribute("type","text");
      historyI.setAttribute("readonly",true);
      historyI.setAttribute("class", "form-control d-block bg-white");
      historyI.setAttribute("value", sHistory[i]);
      historyI.addEventListener("click",function() {
          getWeather(historyI.value);
      })
      historyL.append(historyI);
  }
  
  renHistory(); 
    if (sHistory.length > 0)
      getWeather(sHistory[sHistory.length - 1]); 

}



// clearEl.addEventListener("click",function() {
//   searchHistory = [];
//   renderSearchHistory();
// })

// pull history from localStorage function  parse the .json



// function for 5 day for loops 


// for moment js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);




// function weatherNow () {


//   var lat = position.coords.latitude;
//   var long = position.coords.longitude;

//   var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
//   console.log(weatherUrl); 
// }
// console.log("ayo")

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