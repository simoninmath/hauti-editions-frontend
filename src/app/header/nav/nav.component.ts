import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  
  menuOpen : boolean = false;

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen; 
  }

}
