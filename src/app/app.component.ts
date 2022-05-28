import { Component, OnInit } from '@angular/core';
import { ContentDataDTO } from './_models/contentData';
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
  contentData!: ContentDataDTO;

  constructor(
    public appService: AppService
  ) {
    appService.contentData.subscribe(data => {
      this.contentData = data as ContentDataDTO;
    });
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
