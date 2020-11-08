import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router,private has:HardcodedAuthenticationService) { }

  ngOnInit(): void {
    this.logout()
    this.route.navigate(['/login'])
  }

  logout(){
    this.has.logout()
  }

}
