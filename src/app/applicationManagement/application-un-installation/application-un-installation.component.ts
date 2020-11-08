import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-un-installation',
  templateUrl: './application-un-installation.component.html',
  styleUrls: ['./application-un-installation.component.css']
})
export class ApplicationUnInstallationComponent implements OnInit {

  submitmessage:boolean = false
  message:string
  installedApplicationList:string[] = [];
  selectedApplication:string
  udid:string
  showApplicationList:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(){
    console.log("Submit Called")
    console.log(this.selectedApplication)
    console.log(this.udid)
    this.message="Your application "+this.selectedApplication+" has been un-installed"
    this.submitmessage = true
  }

  showSelect(){
    this.installedApplicationList.push("AppName1")
    this.installedApplicationList.push("AppName2")
    this.installedApplicationList.push("AppName3")
    this.installedApplicationList.push("AppName4")
    this.installedApplicationList.push("AppName5")
    this.showApplicationList = true
  }
}
