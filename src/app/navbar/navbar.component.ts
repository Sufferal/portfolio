import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuDisplay: boolean = false;

  toggleMenu() {
    this.menuDisplay = !this.menuDisplay;   
  }
}
