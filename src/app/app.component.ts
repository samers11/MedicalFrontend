import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MedicalFrontend';
  user = 'doctor';
}
