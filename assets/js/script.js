
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

function foreCast (cityD){
  var qForecastUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
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
    var uvUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
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

// show the past searched weather data

function searchList(e){
  var listA = e.target;
  

  if (e.target.matches("li")){
    city  = listA.textContent.trim();
    getWeather(city); 
  }
}

function loadlastCity(){
  $("ul").empty();
  var searchCity = JSON.parse(localStorage.getItem("nameOfCity"));
  if(searchCity!==null){
      searchCity=JSON.parse(localStorage.getItem("nameOfCity"));
      for(i = 0; i< searchCity.length;i++){
          addToList(searchCity[i]);
      }
      city = searchCity[i-1];
      getWeather(city);
  }
}