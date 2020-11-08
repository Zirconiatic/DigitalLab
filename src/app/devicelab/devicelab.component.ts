import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devicelab',
  templateUrl: './devicelab.component.html',
  styleUrls: ['./devicelab.component.css']
})
export class DevicelabComponent implements OnInit {

  show:boolean = false

  devices = [
    {name : "Samsung S8",version:"10.0",availability:"Available",udid:"e45362",platform:"ANDROID",type:"Real",booking:false},
    {name : "Samsung S7",version:"9.0",availability:"Available",udid:"f353r62",platform:"ANDROID",type:"Real",booking:false},
    {name : "Pixel 3A",version:"10.0",availability:"Available",udid:"gy53r62",platform:"ANDROID",type:"Emulator",booking:false},
    {name : "IPhone 11",version:"13.4",availability:"Available",udid:"f353r62-gf2345",platform:"IOS",type:"Real",booking:false},
    {name : "IPhone 8",version:"12.7",availability:"Available",udid:"76fr3r62-yts345",platform:"IOS",type:"Simulator",booking:false},
  ]

  tempComment:string
  tempMessage:string
  tempPlatform:string
  tempUdid:string
  tempVersion:string
  tempName:string

  constructor() { }

  ngOnInit(): void {
  }

  openPopup(tempDevice){
    if(tempDevice.booking === false)
    {
      this.tempComment = "Device has been booked successfully!"
      this.tempMessage = "Following are the required details:-"
      this.tempPlatform = "Platform:- "+tempDevice.platform
      this.tempUdid = "Udid:- "+tempDevice.udid
      this.tempVersion = "Version:- "+tempDevice.version
      this.tempName = "Device Name:- "+tempDevice.name
      console.log(this.devices.length)
      for(var i=0; i < this.devices.length;i++ )
      {
        if(tempDevice.udid === this.devices[i].udid)
        {
          this.devices[i].booking = true;
          this.devices[i].availability = "UnAvailable";
        }
      }
      this.show = true
    }
    else
    {
      this.tempComment = "Device has been released successfully!"
      this.tempMessage = ""
      this.tempPlatform = ""
      this.tempUdid = ""
      this.tempVersion = ""
      this.tempName = ""
      for(var i=0; i < this.devices.length;i++ )
      {
        if(tempDevice.udid === this.devices[i].udid)
        {
          this.devices[i].booking = false;
          this.devices[i].availability = "Available";
        }
      }
      this.show = true
    }
  }

  hide(){
    this.show = false;
  }

}
