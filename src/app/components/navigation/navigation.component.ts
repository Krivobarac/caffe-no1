import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() scrollIntoView!: (elementId: string, urlStringParam: string) => void
  constructor() { }

  ngOnInit(): void { }

  toggleMobileMenu() {
    const className = 'menu-open';
    if (document.body.classList.contains(className)) {
      document.body.classList.remove(className)
    } else {
      document.body.classList.add(className)
    }
  }
}
