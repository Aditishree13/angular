import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
  
})
export class ServersComponent {
  ServersId:number=10;
  ServerStatus:string='offline';

  getServersStatus() {
    return this.ServerStatus;
}
}
