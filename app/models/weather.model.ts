export interface WeatherResponse {
  base: string;
  clouds: Clouds;
  coord: Coordinates;
  dt: number;
  id: number;
  name: string;
  weather: Weather[];
  main: MainWeather;
  wind: Wind;
}

interface Weather {
    description: string;
    icon: string;
    main: string;
}

interface MainWeather {
    feels_like: number;
    humidity: number;
    grnd_level: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}

interface Wind {
    speed: number;
    deg:  number;
}

interface Clouds {
    all: number;
}

interface Coordinates {
    lat: number;
    lon: number;
}