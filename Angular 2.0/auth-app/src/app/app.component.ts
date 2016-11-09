import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router) {}
  title = 'app works!';
}
