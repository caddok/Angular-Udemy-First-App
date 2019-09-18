import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = '';
  serverName = 'Testserver';
  userName = '';
  isResetBtnEnabled = false;
  isServerCreated = false;
  isDetailsClicked = false;
  servers = ['Testserver', 'Testserver 2'];
  eventClicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  enableResetButton() {
    if (this.userName.length > 0) {
      this.isResetBtnEnabled = true;
    }
    return this.isResetBtnEnabled;
  }

  onResetButton() {
    this.userName = '';
  }

  onDetailsClick(event: Event) {
    this.isDetailsClicked = !this.isDetailsClicked;
    this.eventClicks.push(event.timeStamp);
  }
}
