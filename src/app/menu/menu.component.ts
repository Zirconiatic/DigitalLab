import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username:string
  constructor(public has:HardcodedAuthenticationService) { }

  ngOnInit(): void {
    this.username = this.has.getUsername()
  }

}
