// we need to implement the weather application

// need to defined a subject class -> WeatherInfo class
interface IWeatherInfo {
    
    registerObserver(observer: ITvScreen): void;

    removeObserver(observer: ITvScreen): void;

    notify(): void;

    getWeatherData(): any;

    setWeatherData(wind: number, temprature: number): any;
}


// need to defined the obsever class -> ObserverScreen
interface ITvScreen {
    update(weatherInfo: IWeatherInfo): void;
}

/* Subject Class */
class WeatherInfo implements IWeatherInfo {
    private observers: ITvScreen[]  = [];
    private weatherData:any = { windSpeed: undefined, temprature: undefined };

    registerObserver(observer: ITvScreen): void {
        this.observers.push(observer);
    }

    removeObserver(observer: ITvScreen): void {
        const index = this.observers.indexOf(observer);
        if( index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(): void {
        for (let index = 0; index < this.observers.length; index++) {
            const observer = this.observers[index];
            observer.update(this);
        }
    }

    getWeatherData() {
        return this.weatherData;
    }

    setWeatherData(wind: number, temprature: number) {
        this.weatherData = { wind, temprature };
        this.notify();
    }
}

/* Observer Class */
class TvScreen implements ITvScreen {
    update(weatherInfo: IWeatherInfo): void {
        const weatherData = weatherInfo.getWeatherData();

        console.log('Weather Data Received: ', weatherData);
    }
}

/* client code */
/* Subject Object */
const weatherInfo = new WeatherInfo();

/* Observer Object */
const TvScreen1 = new TvScreen();
const TvScreen2 = new TvScreen();
const TvScreen3 = new TvScreen();

/* register the objecter on subject */

weatherInfo.registerObserver(TvScreen1);
weatherInfo.registerObserver(TvScreen2);
weatherInfo.registerObserver(TvScreen3);

/* set the weather data */

weatherInfo.setWeatherData(23, 98);
weatherInfo.setWeatherData(34, 99);