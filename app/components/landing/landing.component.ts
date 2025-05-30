import { Component } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { AsyncPipe, CommonModule } from '@angular/common';
import { UserProfile } from '../../models/user.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  public userProfile: UserProfile | null = null;
  
  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      if (profile) {
        this.router.navigateByUrl("/home");
      }
    });
  }
}
