import { Component, OnInit } from '@angular/core';
import { userusage } from '../../data/data'

@Component({
  selector: 'app-user-usage',
  templateUrl: './user-usage.component.html',
  styleUrls: ['./user-usage.component.css']
})
export class UserUsageComponent implements OnInit {

  //For various different data
  fromdate: string
  todate: string

  userusage: any[]

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
  padding: number = 100;

  colorScheme = {
    domain: ["#5AA454", "#99badd", "#ffbf00", "#AAAAAA", "#fbceb1"]
  };

  constructor() {
    Object.assign(this, { userusage });
  }

  ngOnInit(): void {

  }

  onSelect(event) {
    console.log(event);
  }

  intervalData() {
    console.log("From Date: " + this.fromdate)
    console.log("To Date: " + this.todate)
    console.log(this.fromdate < this.todate)
  }

}
