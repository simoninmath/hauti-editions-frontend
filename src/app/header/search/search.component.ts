import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  allowAdd = false;
  creationStatus = 'No Add created';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onAdd() {
    return;
  }

  addCreationStatus() {
    this.creationStatus = 'Add created';
  }

  onUpdatedAdd(event: any) {
    console.log(event);
  }
}
