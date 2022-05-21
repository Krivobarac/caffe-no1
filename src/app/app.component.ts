import { Component, OnInit } from '@angular/core';
import { AppService } from './_services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    AppService,
    {provide: 'apiString', useValue: 'content?populate=contact&populate=drink_menu.item&populate=food_menu.item'}
  ]
})
export class AppComponent implements OnInit {
  title = 'caffe-no1';

  constructor(
    public appService: AppService
  ) {
    appService.contentData.subscribe(data => console.log(data));
  }

  ngOnInit(): void {
    const pathname = window.location.pathname.replace('/', '');
    this.scrollIntoView(pathname, pathname)
  }

  scrollIntoView = (elementId: string, urlStringParam: string): void => {
    document.getElementById(elementId)?.scrollIntoView(true);
    window.history.pushState({}, '', urlStringParam);
  }
}
