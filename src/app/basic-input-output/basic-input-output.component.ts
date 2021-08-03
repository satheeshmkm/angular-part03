import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-input-output',
  templateUrl: './basic-input-output.component.html',
  styleUrls: ['./basic-input-output.component.css']
})
export class BasicInputOutputComponent implements OnInit {

  @Input() getParentData:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
