var weatherApiKey = "558c0603a2078d8a70f4729133b3fa07";
var searchButton = document.querySelector("#search-button");
var searchHistoryList = document.querySelector("#search-history");
var cityNameDisplay = document.querySelector("#city-name");


var todayDate = document.querySelector("#todays-date");
var future1Date = document.querySelector("#future-date-1");
var future2Date = document.querySelector("#future-date-2");
var future3Date = document.querySelector("#future-date-3");
var future4Date = document.querySelector("#future-date-4");
var future5Date = document.querySelector("#future-date-5");

var todayTempDislay = document.querySelector("#current-temperature");
var future1TempTempDislay = document.querySelector("#future-temp-1");
var future2TempTempDislay = document.querySelector("#future-temp-2");
var future3TempTempDislay = document.querySelector("#future-temp-3");
var future4TempTempDislay = document.querySelector("#future-temp-4");
var future5TempTempDislay = document.querySelector("#future-temp-5");

var todayHumidDisplay = document.querySelector("#current-humidity");
var future1HumidDisplay = document.querySelector("#future-humidity-1");
var future2HumidDisplay = document.querySelector("#future-humidity-2");
var future3HumidDisplay = document.querySelector("#future-humidity-3");
var future4HumidDisplay = document.querySelector("#future-humidity-4");
var future5HumidDisplay = document.querySelector("#future-humidity-5");

var todayWindDisplay = document.querySelector("#current-wind-speed");
var future1WindDisplay = document.querySelector("#future-wind-1");
var future2WindDisplay = document.querySelector("#future-wind-2");
var future3WindDisplay = document.querySelector("#future-wind-3");
var future4WindDisplay = document.querySelector("#future-wind-4");
var future5WindDisplay = document.querySelector("#future-wind-5");

var todayIcon = document.querySelector("#current-weather-icon");
var future1Icon = document.querySelector("#future-icon-1");
var future2Icon = document.querySelector("#future-icon-2");
var future3Icon = document.querySelector("#future-icon-3");
var future4Icon = document.querySelector("#future-icon-4");
var future5Icon = document.querySelector("#future-icon-5");

var searchHistory = localStorage.getItem("city");
// searchHistoryList.appendChild(searchHistory);


searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    var searchInput = document.querySelector("#search-input").value;

    localStorage.setItem("city", searchInput);

    cityCoordinates();    
    
    function cityCoordinates() {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + searchInput + "&appid=" + weatherApiKey)
        .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var cityArray = data[0];
        var latitude = cityArray.lat;
        var longitude = cityArray.lon;
        
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + weatherApiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var cityName = data.city.name;

            var todayArray = data.list[0];
            var todayTemp = todayArray.main.temp;
            var todayHumid = todayArray.main.humidity;
            var todayWind = todayArray.wind.speed;
            // var todayIconValue = todayArray.weather.main
            
            var futureOneArray = data.list[1];
            var futureOneTemp = futureOneArray.main.temp;
            var futureOneHumid = futureOneArray.main.humidity;
            var futureOneWind = futureOneArray.wind.speed;
            // var futureOneIconValue = futureOneArray.weather.main 
            
            var futureTwoArray = data.list[2];
            var futureTwoTemp = futureTwoArray.main.temp;
            var futureTwoHumid = futureTwoArray.main.humidity;
            var futureTwoWind = futureTwoArray.wind.speed;
            // var futureTwoIconValue = futureTwoArray.weather.main 
            
            var futureThreeArray = data.list[3];
            var futureThreeTemp = futureThreeArray.main.temp;
            var futureThreeHumid = futureThreeArray.main.humidity;
            var futureThreeWind = futureThreeArray.wind.speed;
            // var futureThreeIconValue = futureThreeArray.weather.main 
            
            var futureFourArray = data.list[4];
            var futureFourTemp = futureFourArray.main.temp;
            var futureFourHumid = futureFourArray.main.humidity;
            var futureFourWind = futureFourArray.wind.speed;
            // var futureFourIconValue = futureFourArray.weather.main 
            
            var futureFiveArray = data.list[5];
            var futureFiveTemp = futureFiveArray.main.temp;
            var futureFiveHumid = futureFiveArray.main.humidity;
            var futureFiveWind = futureFiveArray.wind.speed;
            // var futureFiveIconValue = futureFiveArray.weather.main 

            // console.log(todayIconValue);
            // console.log(futureOneIconValue);
            // console.log(futureTwoIconValue);
            // console.log(futureThreeIconValue);
            // console.log(futureFourIconValue);
            // console.log(futureFiveIconValue);
            
            cityNameDisplay.textContent = cityName

            // todayDate
            // future1Date
            // future2Date
            // future3Date
            // future4Date
            // future5Date
            
            todayTempDislay.textContent = "Today's Temp: " + todayTemp
            future1TempTempDislay.textContent = "Temp: " + futureOneTemp
            future2TempTempDislay.textContent = "Temp: " + futureTwoTemp
            future3TempTempDislay.textContent = "Temp: " + futureThreeTemp
            future4TempTempDislay.textContent = "Temp: " + futureFourTemp
            future5TempTempDislay.textContent = "Temp: " + futureFiveTemp
            
            todayHumidDisplay.textContent = "Today's Humidity: " + todayHumid
            future1HumidDisplay.textContent = "Humidity: " + futureOneHumid
            future2HumidDisplay .textContent = "Humidity: " + futureTwoHumid
            future3HumidDisplay.textContent = "Humidity: " + futureThreeHumid
            future4HumidDisplay.textContent = "Humidity: " + futureFourHumid
            future5HumidDisplay.textContent = "Humidity: " + futureFiveHumid
            
            todayWindDisplay.textContent = "Today's Wind Speed: " + todayWind
            future1WindDisplay.textContent = "Wind Speed: " + futureOneWind
            future2WindDisplay.textContent = "Wind Speed: " + futureTwoWind
            future3WindDisplay.textContent = "Wind Speed: " + futureThreeWind
            future4WindDisplay.textContent = "Wind Speed: " + futureFourWind
            future5WindDisplay.textContent = "Wind Speed: " + futureFiveWind
            
            if (todayIconValue == "Clear") {
                // display sun as todayIcon
            } else if (todayIconValue == "Clouds") {
                // display cloud as todayIcon
            } else if (todayIconValue == "Rain") {
                // display rain as todayIcon
            } else if (todayIconValue == "Thunderstorm") {
                // display thunderstorm as todayIcon
            } else if (todayIconValue == "Drizzle") {
                // display drizzle as todayIcon
            } else if (todayIconValue == "Snow") {
                // display snow as todayIcon
            } else {
                // display something as todayIcon
            };

         
            // future1Icon
            // future2Icon
            // future3Icon
            // future4Icon
            // future5Icon

        })
    })}
});