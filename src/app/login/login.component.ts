import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string
  password: string
  errormessage: string
  invalidLogin = false

  constructor(private router:Router, private has:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.has.authenticate(this.username,this.password)) {
      console.log("Success")
      this.invalidLogin = false
      this.router.navigate(['dashboard',this.username])
    }
    else {
      console.log("invalid")
      this.errormessage = "Invalid Credentials"
      this.invalidLogin = true
    }
  }

}
