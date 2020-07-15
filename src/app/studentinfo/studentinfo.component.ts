import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentInfoComponent implements OnInit {

  message:string;


  constructor() { }

  ngOnInit(): void {
   alert(this.message); 
  }

}
