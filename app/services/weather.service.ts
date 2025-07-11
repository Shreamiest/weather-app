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
}
