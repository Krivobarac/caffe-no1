import { Component, Input } from '@angular/core';
import { MenuDTO } from 'src/app/_models/contentData';

enum MenuCategory {
  FOOD = 'food',
  DRINK = 'drink'
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuCategory = MenuCategory;
  menuCat = MenuCategory.DRINK;
  @Input() drinkMenu!: MenuDTO[];
  @Input() foodMenu!: MenuDTO[];

  setMenuCat(cat: MenuCategory) {
    this.menuCat = cat;
  }
}
