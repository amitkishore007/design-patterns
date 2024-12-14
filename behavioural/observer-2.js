// we need to implement the weather application
/* Subject Class */
var WeatherInfo = /** @class */ (function () {
    function WeatherInfo() {
        this.observers = [];
        this.weatherData = { windSpeed: undefined, temprature: undefined };
    }
    WeatherInfo.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    WeatherInfo.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    };
    WeatherInfo.prototype.notify = function () {
        for (var index = 0; index < this.observers.length; index++) {
            var observer = this.observers[index];
            observer.update(this);
        }
    };
    WeatherInfo.prototype.getWeatherData = function () {
        return this.weatherData;
    };
    WeatherInfo.prototype.setWeatherData = function (wind, temprature) {
        this.weatherData = { wind: wind, temprature: temprature };
        this.notify();
    };
    return WeatherInfo;
}());
/* Observer Class */
var TvScreen = /** @class */ (function () {
    function TvScreen() {
    }
    TvScreen.prototype.update = function (weatherInfo) {
        var weatherData = weatherInfo.getWeatherData();
        console.log('Weather Data Received: ', weatherData);
    };
    return TvScreen;
}());
/* client code */
/* Subject Object */
var weatherInfo = new WeatherInfo();
/* Observer Object */
var TvScreen1 = new TvScreen();
var TvScreen2 = new TvScreen();
var TvScreen3 = new TvScreen();
/* register the objecter on subject */
weatherInfo.registerObserver(TvScreen1);
weatherInfo.registerObserver(TvScreen2);
weatherInfo.registerObserver(TvScreen3);
/* set the weather data */
weatherInfo.setWeatherData(23, 98);
weatherInfo.setWeatherData(34, 99);
