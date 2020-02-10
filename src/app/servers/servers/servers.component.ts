import { Component, OnInit } from '@angular/core';

@Component({
  //selector:'[app-servers]', //Attribute selector style
  //selector: '.app-servers',   //Class selector style
  selector: 'app-servers',  //CSS selector style
  templateUrl: './servers.component.html',
  /* -> This is using the in-line template style
  template:`
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>`,
    */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
