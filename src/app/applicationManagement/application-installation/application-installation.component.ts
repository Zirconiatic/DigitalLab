import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-installation',
  templateUrl: './application-installation.component.html',
  styleUrls: ['./application-installation.component.css']
})
export class ApplicationInstallationComponent implements OnInit {

  optradio:string = "Local System"
  showAdditionalFields:boolean = false
  udidName:string
  message:string
  submitmessage:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  handleAdditionalFields(){
    if(this.optradio === "Git")
    {
      this.showAdditionalFields = true
    }
    else{
      this.showAdditionalFields = false
    }
  }

  handleSubmit(){
    console.log(this.udidName)
    console.log(this.optradio)
    this.message = "App has been successfully installed on "+this.udidName
    this.submitmessage = true
  }
}
