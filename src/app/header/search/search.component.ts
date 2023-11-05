import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  styles: [
    `
      .online {
        color: 'red';
      }
    `,
  ],
})

/* @Directive({
    selector: '[turnToRed]'
}) */
export class SearchComponent implements OnInit {
  allowAdd = false;
  creationStatus = 'No Add created';
  addName = 'Test';
  username = '';
  button = '';
  serverName = 'ChatGPT';
  serverCreated = false;
  serverStatus = 'online';
  serverId = '0001';
  servers = ['TestServer', 'TestAgain'];
  showSecret = false;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {}

  onAdd() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.creationStatus = 'add has been created! Name is ' + this.addName;
  }

  addCreationStatus() {
    this.creationStatus = 'Add created';
  }

  /*  onUpdatedAdd(event: any) {
    console.log(event);
  } */

  onUpdatedAdd(event: Event) {
    this.addName = (<HTMLInputElement>event.target).value; // Précise à TS le Type de l'Event
  }

  turnToRed() {
    // this.button = (<HTMLButtonElement>event.target).value;
  }

  getServerStatus() {
    return this.serverStatus === 'offline'
      ? 'Server is offline'
      : 'Server is online';
  }

  getColor() {
    return this.serverStatus === 'offline' ? 'green' : 'red';
  }
}
