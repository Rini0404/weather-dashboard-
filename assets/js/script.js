// consts
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
function getWeather (city) {
  var queryUrl =  `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    $.ajax({
      url: queryUrl,
      method: 'GET',
    }) .then(function (response) {
      console.log(response)
        cCity.text(response.name);
        // how to convert temp to F^o
        // stackOver
        var fHeight = (response.main.temp - 273.15) * 1.8 + 32; 
        $(cTemp).html((fHeight).toFixed(2)+'&#8457');
          // humidity
          var windS = response.wind.speed;
          // stackOOver
            var windData = (windS*2.37).toFixed(1); 
              $(cWind).html(windData + "Mph"); 
              // uv index, need to make new func
        uvData(response.coord.lat, response.coord.lon);
        // add forecast func outside
        foreCast(response.id);
        if (response.cod == 200){
          //stopped here
          searchCity = json.parse(localStorage.getItem('nameOfCity')); 
            console.log(searchCity);
              if (searchCity == null) {
                searchCity = []; 
                searchCity.push(city.toUpperCase());
                localStorage.setItem('nameOfCity', json.stringify(searchCity));
                addToList(city); 
              }else{
                if (find(city)> 0 ){
                  searchCity.push(city.toUpperCase());
                  localStorage.setItem('nameOfCity', json.stringify(searchCity));
                  addToList(city);
                }
              }
        }
    })
}

  function addToList(js){
    var listA= $("<li>"+js.toUpperCase()+"</li>");
    $(listA).attr("class","list-group-item");
    $(listA).attr("data-value",js.toUpperCase());
    $(".list-group").append(listA);
}

// var iconcode= response.list[((i+1)*8)-1].weather[0].icon;
// var iconurl="https://openweathermap.org/img/wn/"+iconcode+".png";

function foreCast (city){
  var qForecastUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    $.ajax ({
      url: qForecastUrl,
      method: "GET", 

    }).then(function (response){
      for ( i = 0; i < 5 ; i++) { 
        var cDate = new Date ((response.list =[((i + 1)*8 ) - 1 ] .dt)*1000).toLocaleDateString(); //add to ids
        $("#forHum" +i ).html(humidity + '%');
        $("#forTemp" +i ).html(fHeight + '&#8457');
        $("#forImage" +i ).html(`<img src = "${imgUrl}">`);
        $("#forDate" +i ).html(cDate); 
      }
    });

  }


function toDisplayWeather(e){
  e.preventDefault();
  if (inputL.val().trim()!==''){
    city = inputL.val().trim();
  getWeather(city); 
  console.log(city)
  }
}
// $("#searchBtn").on("click",toDisplayWeather);
// function look(s){
//   for (var i = 0; i < searchCity.length; i++) {
//     if (s.toUpperCase() === searchCity[i]){
//       return -1;
//     }
//   }
//   return 1; 
// }

  
  function UvData (lon, lat){
    var uvUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,alerts&appid=${apiKey}`;
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    $.ajax({
      url: uvUrl,
        method: "GET",
      })
        .then(function (response){
        $(cUV).html(response.val); 
      }); 
    }

// show the past searched weather data

function searchList(e){
  var listA = e.target;
  

  if (e.target.matches("li")){
    city  = listA.textContent.trim();
    getWeather(city); 
  }
}



