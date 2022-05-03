import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  static readonly isBrowser = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId: string
  ) { 
    AppService.isBrowser.next(isPlatformBrowser(this.platformId));
  }
}
