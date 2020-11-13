import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-all-runs',
  templateUrl: './all-runs.component.html',
  styleUrls: ['./all-runs.component.css']
})
export class AllRunsComponent implements OnInit {

  polling: any

  public allruns: Run[] = [
    new Run('Browser_Automation', 1, 'SUCCESS', 'trigger', 'report', false),
    new Run('Mobile_Automation', 1, 'SUCCESS', 'trigger', 'report', false)
  ]

  constructor() {
  }

  ngOnInit(): void {
    //polling started
    this.polling = setInterval(() => this.handleTimeout(), 30000);
  }

  ngOnDestroy() {
    //cleaning the polling mechanism
    clearInterval(this.polling);
  }

  handleReport(run) {
    console.log(run)
  }

  handleTrigger(run) {
    for (let i = 0; i < this.allruns.length; i++) {
      if (this.allruns[i].runname == run.runname) {
        this.allruns[i].lastbuildstatus = "building"
        this.allruns[i].state = true
        this.allruns[i].lastbuild += 1
      }
    }
  }

  handleTimeout() {
    console.log(formatDate(Date.now(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530'))
    for (let i = 0; i < this.allruns.length; i++) {
      if (this.allruns[i].lastbuildstatus === 'building') {
        this.allruns[i].lastbuildstatus = "SUCCESS"
        this.allruns[i].state = false
      }
    }
  }
}

export class Run {
  constructor(
    public runname: string,
    public lastbuild: number,
    public lastbuildstatus: string,
    public trigger: string,
    public report: string,
    public state: boolean
  ) { }
}
