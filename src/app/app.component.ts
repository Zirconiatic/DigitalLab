import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from './service/hardcoded-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  username:string
  constructor(public has:HardcodedAuthenticationService){}
  ngOnInit(): void {
    this.username = this.has.getUsername()
  }



}
