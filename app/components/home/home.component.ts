import { Component, Input } from '@angular/core';
import { UserProfile } from '../../models/user.model';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe, CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from "../weather/weather.component";
import { WeatherResponse } from '../../models/weather.model';
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AsyncPipe, FormsModule, WeatherComponent, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public userProfile: UserProfile | null = null;
  public cityName: string = '';
  public errorMsg: string = '';
  public cityWeather: WeatherResponse | null = null;
  public isLoading: boolean = false;

  constructor(
    public auth: AuthService,
    private weatherSVC: WeatherService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      if (profile) {
        this.userProfile = profile as UserProfile;
        this.userProfile.profileUrl = `https://github.com/${this.userProfile.nickname}`;
        console.log(this.userProfile);
      }
    });
  }

  getWeatherForecast() {
    this.isLoading = true;
    this.weatherSVC.getWeatherByCity(this.cityName).subscribe({
      next: res => {
        this.errorMsg = '';
        this.cityWeather = res;
        console.log(res);
        this.isLoading = false;
      },
      error: error => {
        console.error(error.error.message);
        this.errorMsg = error.error.message;
        this.isLoading = false;
      }
    });
  }

  resetWeather() {
    this.cityWeather = null;
    this.cityName = "";
  }

}
