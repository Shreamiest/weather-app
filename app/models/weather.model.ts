export interface WeatherResponse {
  name: string;
  weather: Weather[];
  main: MainWeather;
  wind: Wind;
}

interface Weather {
    description: string;
    icon: string;
}

interface MainWeather {
    temp: number;
    humidity: number;
}

interface Wind {
    speed: number;
}