var weatherApiKey = '558c0603a2078d8a70f4729133b3fa07';
var searchButton = document.querySelector('#search-button');
var cityNameDisplay = document.querySelector('#city-name');

var todayDateDisplay = document.querySelector('#todays-date');
var future1DateDisplay = document.querySelector('#future-date-1');
var future2DateDisplay = document.querySelector('#future-date-2');
var future3DateDisplay = document.querySelector('#future-date-3');
var future4DateDisplay = document.querySelector('#future-date-4');
var future5DateDisplay = document.querySelector('#future-date-5');

var todayTempDislay = document.querySelector('#current-temperature');
var future1TempTempDislay = document.querySelector('#future-temp-1');
var future2TempTempDislay = document.querySelector('#future-temp-2');
var future3TempTempDislay = document.querySelector('#future-temp-3');
var future4TempTempDislay = document.querySelector('#future-temp-4');
var future5TempTempDislay = document.querySelector('#future-temp-5');

var todayHumidDisplay = document.querySelector('#current-humidity');
var future1HumidDisplay = document.querySelector('#future-humidity-1');
var future2HumidDisplay = document.querySelector('#future-humidity-2');
var future3HumidDisplay = document.querySelector('#future-humidity-3');
var future4HumidDisplay = document.querySelector('#future-humidity-4');
var future5HumidDisplay = document.querySelector('#future-humidity-5');

var todayWindDisplay = document.querySelector('#current-wind-speed');
var future1WindDisplay = document.querySelector('#future-wind-1');
var future2WindDisplay = document.querySelector('#future-wind-2');
var future3WindDisplay = document.querySelector('#future-wind-3');
var future4WindDisplay = document.querySelector('#future-wind-4');
var future5WindDisplay = document.querySelector('#future-wind-5');

var todayIcon = document.querySelector('#current-weather-icon');
var future1Icon = document.querySelector('#future-icon-1');
var future2Icon = document.querySelector('#future-icon-2');
var future3Icon = document.querySelector('#future-icon-3');
var future4Icon = document.querySelector('#future-icon-4');
var future5Icon = document.querySelector('#future-icon-5');

var searchHistoryDisplay = document.querySelector('#search-history');

var searchInputArray = JSON.parse(localStorage.getItem('cityList'));

if (searchInputArray === null) {
  searchInputArray = [];
}

function searchHistory() {
  searchHistoryDisplay.innerHTML = '';
  for (i = 0; i < searchInputArray.length; i++) {
    var searchHistoryEl = document.createElement('li');
    searchHistoryEl.textContent = searchInputArray[i];
    searchHistoryDisplay.appendChild(searchHistoryEl);
  }
}
searchHistory();

searchButton.addEventListener('click', function (event) {
  event.preventDefault();

  var searchInput = document.querySelector('#search-input').value;

  searchInputArray.push(searchInput);
  localStorage.setItem('cityList', JSON.stringify(searchInputArray));

  searchHistory();
  cityCoordinates();

  function cityCoordinates() {
    fetch(
      'https://api.openweathermap.org/geo/1.0/direct?q=' +
        searchInput +
        '&appid=' +
        weatherApiKey
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var cityArray = data[0];
        var latitude = cityArray.lat;
        var longitude = cityArray.lon;

        fetch(
          'https://api.openweathermap.org/data/2.5/forecast?lat=' +
            latitude +
            '&lon=' +
            longitude +
            '&appid=' +
            weatherApiKey
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);

            var cityName = data.city.name;

            var todayArray = data.list[0];
            var todayTemp = Math.trunc(
              (todayArray.main.temp - 273.1) * 1.8 + 32
            );
            var todayHumid = todayArray.main.humidity;
            var todayWind = todayArray.wind.speed;
            var todayIconValue = todayArray.weather[0].id;

            var futureOneArray = data.list[1];
            var futureOneTemp = Math.trunc(
              (futureOneArray.main.temp - 273.1) * 1.8 + 32
            );
            var futureOneHumid = futureOneArray.main.humidity;
            var futureOneWind = futureOneArray.wind.speed;
            var futureOneIconValue = futureOneArray.weather[0].id;

            var futureTwoArray = data.list[2];
            var futureTwoTemp = Math.trunc(
              (futureTwoArray.main.temp - 273.1) * 1.8 + 32
            );
            var futureTwoHumid = futureTwoArray.main.humidity;
            var futureTwoWind = futureTwoArray.wind.speed;
            var futureTwoIconValue = futureTwoArray.weather[0].id;

            var futureThreeArray = data.list[3];
            var futureThreeTemp = Math.trunc(
              (futureThreeArray.main.temp - 273.1) * 1.8 + 32
            );
            var futureThreeHumid = futureThreeArray.main.humidity;
            var futureThreeWind = futureThreeArray.wind.speed;
            var futureThreeIconValue = futureThreeArray.weather[0].id;

            var futureFourArray = data.list[4];
            var futureFourTemp = Math.trunc(
              (futureFourArray.main.temp - 273.1) * 1.8 + 32
            );
            var futureFourHumid = futureFourArray.main.humidity;
            var futureFourWind = futureFourArray.wind.speed;
            var futureFourIconValue = futureFourArray.weather[0].id;

            var futureFiveArray = data.list[5];
            var futureFiveTemp = Math.trunc(
              (futureFiveArray.main.temp - 273.1) * 1.8 + 32
            );
            var futureFiveHumid = futureFiveArray.main.humidity;
            var futureFiveWind = futureFiveArray.wind.speed;
            var futureFiveIconValue = futureFiveArray.weather[0].id;

            cityNameDisplay.textContent = cityName;

            var todayDate = moment().format('dddd, MMMM Do, YYYY');
            todayDateDisplay.textContent = todayDate;
            var future1Date = moment().add(1, 'days').format('ddd MM/DD/YY');
            future1DateDisplay.textContent = future1Date;
            var future2Date = moment().add(2, 'days').format('ddd MM/DD/YY');
            future2DateDisplay.textContent = future2Date;
            var future3Date = moment().add(3, 'days').format('ddd MM/DD/YY');
            future3DateDisplay.textContent = future3Date;
            var future4Date = moment().add(4, 'days').format('ddd MM/DD/YY');
            future4DateDisplay.textContent = future4Date;
            var future5Date = moment().add(5, 'days').format('ddd MM/DD/YY');
            future5DateDisplay.textContent = future5Date;

            todayTempDislay.textContent =
              "Today's Temp: " + todayTemp + '° Fahrenheit';
            future1TempTempDislay.textContent = 'Temp: ' + futureOneTemp + '°F';
            future2TempTempDislay.textContent = 'Temp: ' + futureTwoTemp + '°F';
            future3TempTempDislay.textContent =
              'Temp: ' + futureThreeTemp + '°F';
            future4TempTempDislay.textContent =
              'Temp: ' + futureFourTemp + '°F';
            future5TempTempDislay.textContent =
              'Temp: ' + futureFiveTemp + '°F';

            todayHumidDisplay.textContent = "Today's Humidity: " + todayHumid;
            future1HumidDisplay.textContent = 'Humidity: ' + futureOneHumid;
            future2HumidDisplay.textContent = 'Humidity: ' + futureTwoHumid;
            future3HumidDisplay.textContent = 'Humidity: ' + futureThreeHumid;
            future4HumidDisplay.textContent = 'Humidity: ' + futureFourHumid;
            future5HumidDisplay.textContent = 'Humidity: ' + futureFiveHumid;

            todayWindDisplay.textContent = "Today's Wind Speed: " + todayWind;
            future1WindDisplay.textContent = 'Wind Speed: ' + futureOneWind;
            future2WindDisplay.textContent = 'Wind Speed: ' + futureTwoWind;
            future3WindDisplay.textContent = 'Wind Speed: ' + futureThreeWind;
            future4WindDisplay.textContent = 'Wind Speed: ' + futureFourWind;
            future5WindDisplay.textContent = 'Wind Speed: ' + futureFiveWind;

            if (todayIconValue == 800) {
              todayIcon.src = 'http://openweathermap.org/img/wn/01d@2x.png';
            } else if (todayIconValue > 800 && todayIconValue < 805) {
              todayIcon.src = 'http://openweathermap.org/img/wn/03d@2x.png';
            } else if (todayIconValue > 499 && todayIconValue < 532) {
              todayIcon.src = 'http://openweathermap.org/img/wn/09d@2x.png';
            } else if (todayIconValue > 199 && todayIconValue < 233) {
              todayIcon.src = 'http://openweathermap.org/img/wn/11d@2x.png';
            } else if (todayIconValue > 299 && todayIconValue < 322) {
              todayIcon.src = 'http://openweathermap.org/img/wn/10d@2x.png';
            } else if (todayIconValue > 599 && todayIconValue < 623) {
              todayIcon.src = 'http://openweathermap.org/img/wn/13d@2x.png';
            } else {
              todayIcon.src = 'http://openweathermap.org/img/wn/50d@2x.png';
            }

            if (futureOneIconValue == 800) {
              future1Icon.src = 'http://openweathermap.org/img/wn/01d@2x.png';
            } else if (futureOneIconValue > 800 && futureOneIconValue < 805) {
              future1Icon.src = 'http://openweathermap.org/img/wn/03d@2x.png';
            } else if (futureOneIconValue > 499 && futureOneIconValue < 532) {
              future1Icon.src = 'http://openweathermap.org/img/wn/09d@2x.png';
            } else if (futureOneIconValue > 199 && futureOneIconValue < 233) {
              future1Icon.src = 'http://openweathermap.org/img/wn/11d@2x.png';
            } else if (futureOneIconValue > 299 && futureOneIconValue < 322) {
              future1Icon.src = 'http://openweathermap.org/img/wn/10d@2x.png';
            } else if (futureOneIconValue > 599 && futureOneIconValue < 623) {
              future1Icon.src = 'http://openweathermap.org/img/wn/13d@2x.png';
            } else {
              future1Icon.src = 'http://openweathermap.org/img/wn/50d@2x.png';
            }

            if (futureTwoIconValue == 800) {
              future2Icon.src = 'http://openweathermap.org/img/wn/01d@2x.png';
            } else if (futureTwoIconValue > 800 && futureTwoIconValue < 805) {
              future2Icon.src = 'http://openweathermap.org/img/wn/03d@2x.png';
            } else if (futureTwoIconValue > 499 && futureTwoIconValue < 532) {
              future2Icon.src = 'http://openweathermap.org/img/wn/09d@2x.png';
            } else if (futureTwoIconValue > 199 && futureTwoIconValue < 233) {
              future2Icon.src = 'http://openweathermap.org/img/wn/11d@2x.png';
            } else if (futureTwoIconValue > 299 && futureTwoIconValue < 322) {
              future2Icon.src = 'http://openweathermap.org/img/wn/10d@2x.png';
            } else if (futureTwoIconValue > 599 && futureTwoIconValue < 623) {
              future2Icon.src = 'http://openweathermap.org/img/wn/13d@2x.png';
            } else {
              future2Icon.src = 'http://openweathermap.org/img/wn/50d@2x.png';
            }

            if (futureThreeIconValue == 800) {
              future3Icon.src = 'http://openweathermap.org/img/wn/01d@2x.png';
            } else if (
              futureThreeIconValue > 800 &&
              futureThreeIconValue < 805
            ) {
              future3Icon.src = 'http://openweathermap.org/img/wn/03d@2x.png';
            } else if (
              futureThreeIconValue > 499 &&
              futureThreeIconValue < 532
            ) {
              future3Icon.src = 'http://openweathermap.org/img/wn/09d@2x.png';
            } else if (
              futureThreeIconValue > 199 &&
              futureThreeIconValue < 233
            ) {
              future3Icon.src = 'http://openweathermap.org/img/wn/11d@2x.png';
            } else if (
              futureThreeIconValue > 299 &&
              futureThreeIconValue < 322
            ) {
              future3Icon.src = 'http://openweathermap.org/img/wn/10d@2x.png';
            } else if (
              futureThreeIconValue > 599 &&
              futureThreeIconValue < 623
            ) {
              future3Icon.src = 'http://openweathermap.org/img/wn/13d@2x.png';
            } else {
              future3Icon.src = 'http://openweathermap.org/img/wn/50d@2x.png';
            }

            if (futureFourIconValue == 800) {
              future4Icon.src = 'http://openweathermap.org/img/wn/01d@2x.png';
            } else if (futureFourIconValue > 800 && futureFourIconValue < 805) {
              future4Icon.src = 'http://openweathermap.org/img/wn/03d@2x.png';
            } else if (futureFourIconValue > 499 && futureFourIconValue < 532) {
              future4Icon.src = 'http://openweathermap.org/img/wn/09d@2x.png';
            } else if (futureFourIconValue > 199 && futureFourIconValue < 233) {
              future4Icon.src = 'http://openweathermap.org/img/wn/11d@2x.png';
            } else if (futureFourIconValue > 299 && futureFourIconValue < 322) {
              future4Icon.src = 'http://openweathermap.org/img/wn/10d@2x.png';
            } else if (futureFourIconValue > 599 && futureFourIconValue < 623) {
              future4Icon.src = 'http://openweathermap.org/img/wn/13d@2x.png';
            } else {
              future4Icon.src = 'http://openweathermap.org/img/wn/50d@2x.png';
            }

            if (futureFiveIconValue == 800) {
              future5Icon.src = 'http://openweathermap.org/img/wn/01d@2x.png';
            } else if (futureFiveIconValue > 800 && futureFiveIconValue < 805) {
              future5Icon.src = 'http://openweathermap.org/img/wn/03d@2x.png';
            } else if (futureFiveIconValue > 499 && futureFiveIconValue < 532) {
              future5Icon.src = 'http://openweathermap.org/img/wn/09d@2x.png';
            } else if (futureFiveIconValue > 199 && futureFiveIconValue < 233) {
              future5Icon.src = 'http://openweathermap.org/img/wn/11d@2x.png';
            } else if (futureFiveIconValue > 299 && futureFiveIconValue < 322) {
              future5Icon.src = 'http://openweathermap.org/img/wn/10d@2x.png';
            } else if (futureFiveIconValue > 599 && futureFiveIconValue < 623) {
              future5Icon.src = 'http://openweathermap.org/img/wn/13d@2x.png';
            } else {
              future5Icon.src = 'http://openweathermap.org/img/wn/50d@2x.png';
            }
          });
      });
  }
});
