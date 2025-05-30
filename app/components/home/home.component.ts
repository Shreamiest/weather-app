import { Component, Input } from '@angular/core';
import { UserProfile } from '../../models/user.model';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public userProfile: UserProfile | null = null;
    
  constructor(public auth: AuthService) {}
  
  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      if (profile) {
        this.userProfile = profile as UserProfile;
        this.userProfile.profileUrl = `https://github.com/${this.userProfile.nickname}`;
        console.log(this.userProfile);
      }
    });
  }
}
