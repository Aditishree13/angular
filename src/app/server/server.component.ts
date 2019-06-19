import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  AllowNewServers=false;
  ServersCreationStatus="No server was created!";
  ServerName="Testserver";
  serverCreated=false;

  constructor() {
    setTimeout( () => {
      this.AllowNewServers=true;
    }, 2000);
   }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated=true;
    this.ServersCreationStatus="server was created! Name is " + this.ServerName;
  }
  onUpdateServerName(event: Event) {
   this.ServerName=(<HTMLInputElement>event.target).value;
  }

}
