import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string, password:string):boolean{
    if(username === "Rohit" && password === "rohitns"){
      sessionStorage.setItem('authenticatedUser',username)
      return true
    }
    return false
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser")
    return !(user === null)
  }

  getUsername(){
    return sessionStorage.getItem('authenticatedUser')
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
