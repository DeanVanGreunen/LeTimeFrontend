import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { API } from '../api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:API) { }

  ngOnInit(): void {
  }

  login(){
    let username = $().val();
  }

  gotoRegistration(){
    // Go To Registration Page
  }
}
