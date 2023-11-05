import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  allowAdd = false;
  creationStatus = 'No Add created';
  addName = '';

  ngOnInit() {}

  onAdd() {
    this.creationStatus = "add has been created! Name is " + this.addName;
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
}
