import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather.model';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private apiKey = '7bf02a80d36e24b45d8539d81018913a';
    private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    constructor(
        private http: HttpClient
    ) { }

    getWeatherByCity(city: string): Observable<WeatherResponse> {
        const url = `${this.apiUrl}?q=${encodeURIComponent(city)}&appid=${this.apiKey}`;
        return this.http.get<WeatherResponse>(url);
    }

    getWeatherClass(condition: string): string {
        switch (condition.toLowerCase()) {
            case 'clear':
                return 'weather-clear';
            case 'clouds':
                return 'weather-cloudy';
            case 'rain':
                return 'weather-rain';
            case 'thunderstorm':
                return 'weather-thunderstorm';
            case 'snow':
                return 'weather-snow';
            case 'mist':
            case 'fog':
            case 'haze':
                return 'weather-fog';
            default:
                return 'weather-partly-cloudy';
        }
    }
}
