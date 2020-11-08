import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-run',
  templateUrl: './create-run.component.html',
  styleUrls: ['./create-run.component.css']
})
export class CreateRunComponent implements OnInit {

  message:string
  submitmessage:boolean = false
  viewDateTime:boolean = false
  runName:string
  file:File
  optradio:string = "Save and Run"
  fileName:string
  date:Date
  time:Time

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(){
    this.message = "Your Details have been Submitted and Run has been created!"
    this.submitmessage = true
    console.log(this.file.name)
    console.log(this.runName)
    console.log(this.optradio)
    console.log(this.date)
    console.log(this.time)
  }

  onChangeFileSelect(e){
    this.file = e.target.files[0]
    this.fileName = this.file.name
    console.log(this.file)
  }

  handleDateTime(bool:boolean){
    console.log(bool)
    this.viewDateTime = bool
  }

}
