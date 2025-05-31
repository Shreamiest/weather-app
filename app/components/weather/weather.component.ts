import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { WeatherResponse } from '../../models/weather.model';
import { AuthService } from '@auth0/auth0-angular';
import { WeatherService } from '../../services/weather.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {

  @Input() cityWeather!: WeatherResponse;
  @Output() out: EventEmitter<number> = new EventEmitter();

  constructor(
    public auth: AuthService,
    private router: Router,
  ) { }


  ngOnInit() {

  }

  getDateNow() {
    return new Date();
  }

  home() {
    this.out.emit(1);
  }

}
