import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather.model';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private apiKey = 'e3b55290a86d362a2a4fa99fd9cf48e1';
    private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    constructor(
        private http: HttpClient
    ) { }

    getWeatherByCity(city: string): Observable<WeatherResponse> {
        const url = `${this.apiUrl}?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=imperial`;
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
