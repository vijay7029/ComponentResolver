import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentinfo',
  templateUrl: './parentinfo.component.html',
  styleUrls: ['./parentinfo.component.css']
})
export class ParentInfoComponent implements OnInit {

  message:string;
  constructor() { }

  ngOnInit(): void {
    alert(this.message);
  }

}
