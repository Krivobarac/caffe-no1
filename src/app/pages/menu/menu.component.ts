import { Component, Input, OnInit } from '@angular/core';
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
export class MenuComponent implements OnInit {
  menuCategory = MenuCategory;
  menuCat = MenuCategory.DRINK;
  @Input() drinkMenu!: MenuDTO[];
  @Input() foodMenu!: MenuDTO[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.drinkMenu);
    console.log(this.foodMenu);
  }

  setMenuCat(cat: MenuCategory) {
    this.menuCat = cat;
  }
}
