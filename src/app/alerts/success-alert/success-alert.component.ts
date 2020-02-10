import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  //styleUrls: ['./success-alert.component.css']
  styles:[`
    p {
      color: green;
      padding: 20px;
      background-color: gray;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
