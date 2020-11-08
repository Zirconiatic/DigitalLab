import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browserlab',
  templateUrl: './browserlab.component.html',
  styleUrls: ['./browserlab.component.css']
})
export class BrowserlabComponent implements OnInit {

  show:boolean = false

  browsers = [
    {name : "chrome",browserVersion:"81.0.4044",availability:"Available",url:"http://hkw2010759.hbap.adroot.hsbc.4444/wd/hub",platform:"WINDOWS",id:"Your ID",comment:"*Paste this into the Browser.json file"},
    {name : "safari",browserVersion:"14.0",availability:"Available",url:"http://hkw2010759.hbap.adroot.hsbc.4444/wd/hub",platform:"WINDOWS",id:"Your ID",comment:"*Paste this into the Browser.json file"},
    {name : "firefox",browserVersion:"78.0b8",availability:"Available",url:"http://hkw2010758.hbap.adroot.hsbc.4444/wd/hub",platform:"WINDOWS",id:"Your ID",comment:"*Paste this into the Browser.json file"},
    {name : "msedge",browserVersion:"85.0.564.44",availability:"Available",url:"http://hkw2010758.hbap.adroot.hsbc.4444/wd/hub",platform:"WINDOWS",id:"Your ID",comment:"*Paste this into the Browser.json file"}
  ]

  tempName:string
  tempUrl:string
  tempPlatform:string
  tempId:string
  tempComment:string

  constructor() { }

  ngOnInit(): void {
  }

  openPopup(browser){
    this.show = true;
    this.tempName = browser.name
    this.tempUrl = browser.url
    this.tempPlatform = browser.platform
    this.tempId = browser.id
    this.tempComment = browser.comment
    console.log(browser.name)
  }

  hide(){
    this.show = false;
  }

}
