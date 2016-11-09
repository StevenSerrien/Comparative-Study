import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp, AuthConfig, provideAuth } from 'angular2-jwt';
import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp, public jwtHelper: JwtHelper) {

    this.jwt = localStorage.getItem('id_token');
    this.decodedJwt = jwtHelper.decodeToken(this.jwt);
    console.log(this.decodedJwt);
    console.log(jwtHelper.decodeToken(this.jwt));
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }

  callAnonymousApi() {
    this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
  }

  callSecuredApi() {
    this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
  }

  _callApi(type, url) {
    this.response = null;
    if (type === 'Anonymous') {
      // For non-protected routes, just use Http
      this.http.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
    if (type === 'Secured') {
      // For protected routes, use AuthHttp
      this.authHttp.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
  }

}
