import { Component } from '@angular/core';
import { AppService } from './_services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cafe-no1';

  constructor(
    private appService: AppService
  ) { }
}
