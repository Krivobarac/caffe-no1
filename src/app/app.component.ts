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
export class AppComponent {
  title = 'caffe-no1';

  constructor(
    public appService: AppService
  ) {appService.contentData.subscribe(data => console.log(data)) }

}
