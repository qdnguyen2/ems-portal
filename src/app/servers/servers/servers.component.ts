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

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName = '';

  userName='';

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {

  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    //console.log(event);
    //this.serverName = event.target.value;
    //explicit casting
    this.serverName = (<HTMLInputElement>event.target).value;    
  }

  onUpdateUserName(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onClearUserName(){
    this.userName = '';
  }

}
