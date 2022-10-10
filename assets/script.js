var weatherApiKey = "558c0603a2078d8a70f4729133b3fa07";
var searchButton = document.querySelector("#search-button");


searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    var searchInput = document.querySelector("#search-input").value;

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
            console.log(data)
            var todayArray = data.list[0];
            var todayTemp = todayArray.main.temp;
            var todayHumid = todayArray.main.humidity;
            var todayWind = todayArray.wind.speed;
            
            var futureOneArray = data.list[1];
            var futureOneTemp = futureOneArray.main.temp;
            var futureOneHumid = futureOneArray.main.humidity;
            var futureOneWind = futureOneArray.wind.speed;
            
            var futureTwoArray = data.list[2];
            var futureTwoTemp = futureTwoArray.main.temp;
            var futureTwoHumid = futureTwoArray.main.humidity;
            var futureTwoWind = futureTwoArray.wind.speed;
            
            var futureThreeArray = data.list[3];
            var futureThreeTemp = futureThreeArray.main.temp;
            var futureThreeHumid = futureThreeArray.main.humidity;
            var futureThreeWind = futureThreeArray.wind.speed;
            
            var futureFourArray = data.list[4];
            var futureFourTemp = futureFourArray.main.temp;
            var futureFourHumid = futureFourArray.main.humidity;
            var futureFourWind = futureFourArray.wind.speed;
            
            var futureFiveArray = data.list[5];
            var futureFiveTemp = futureFiveArray.main.temp;
            var futureFiveHumid = futureFiveArray.main.humidity;
            var futureFiveWind = futureFiveArray.wind.speed;         
        })
    })}
});