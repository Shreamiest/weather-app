import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  constructor(public auth: AuthService) {}
  
}
