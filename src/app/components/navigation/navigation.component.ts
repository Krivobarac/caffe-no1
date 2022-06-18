import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() scrollIntoView!: (elementId: string, urlStringParam: string) => void
  className = 'menu-open';

  toggleMobileMenu() {
    if (document.body.classList.contains(this.className)) {
      this.closeMobileMenu();
    } else {
      document.body.classList.add(this.className);
    }
  }

  closeMobileMenu() {
    document.body.classList.remove(this.className);
  }
}
