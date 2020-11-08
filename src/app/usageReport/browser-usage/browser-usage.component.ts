import { Component, OnInit } from '@angular/core';
import { browserusage } from '../../data/data';

@Component({
  selector: 'app-browser-usage',
  templateUrl: './browser-usage.component.html',
  styleUrls: ['./browser-usage.component.css']
})
export class BrowserUsageComponent implements OnInit {

  //For various different data
  fromdate:string
  todate:string

  browserusage:any[]

  view: any[] = [1000, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "";
  showYAxisLabel = true;
  yAxisLabel = "Hours";
  padding:number = 100;

  colorScheme = {
    domain: ["#5AA454", "#99badd", "#ffbf00", "#AAAAAA"]
  };

  constructor() {
    Object.assign(this, { browserusage });
   }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
  }

  intervalData(){
    console.log("From Date: "+this.fromdate)
    console.log("To Date: "+this.todate)
    console.log(this.fromdate < this.todate)
  }

}
