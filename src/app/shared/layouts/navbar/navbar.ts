import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  private router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);

  menuOpen = signal(false);

  menu = viewChild.required<ElementRef<HTMLUListElement>>('menu');

  toggleMenu() {
    const menuEle = this.menu().nativeElement;

    if (this.menuOpen()) {
      // Close
      menuEle.style.height = '0px';

    } else {
      // Open
      menuEle.style.height = `${menuEle.scrollHeight + 30}px`;
   }

    this.menuOpen.update(value => !value);
  }
}
