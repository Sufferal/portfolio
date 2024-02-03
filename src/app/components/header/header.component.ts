import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  particles: any = []

  ngOnInit() {
    this.particles = Array(100).fill(0);
  }
}
