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
    this.decodedJwt = this.jwt && jwtHelper.decodeToken(this.jwt);
    console.log(this.decodedJwt);
    console.log(jwtHelper.decodeToken(this.jwt));
  }

  ngOnInit() {
  }

}
