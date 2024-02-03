import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @ViewChild('navbar', { static: true }) navbar?: ElementRef;
  menuDisplay: boolean = true;
  navbarDisplay: boolean = true;
  lastScrollTop: number = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.listen('window', 'scroll', () => {
      let st = window.scrollY || document.documentElement.scrollTop;

      if (st > this.lastScrollTop) {
        this.renderer.addClass(this.document.querySelector('.navbar'), 'navbar-sticky');
      }

      this.lastScrollTop = st <= 0 ? 0 : st;
    });
  }

  toggleMenu() {
    this.menuDisplay = !this.menuDisplay;
  }

  toggleNavbar() {
    this.navbarDisplay = !this.navbarDisplay;
  }

  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY - 150;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
    this.lastScrollTop = 0;
  }

  ngOnDestroy() {
    this.renderer.listen('window', 'scroll', () => {});
  }
}
