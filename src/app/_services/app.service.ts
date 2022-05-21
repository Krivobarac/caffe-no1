import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  readonly apiServiceString = environment.api_service_url;
  readonly contentData = new BehaviorSubject<any>(null);

  constructor(
    @Inject('apiString') public apiString: string,
    private http: HttpClient
  ) {
    this.httpGet(apiString);
  }

  httpGet(apiString: string) {
    this.http.get<any>(`${this.apiServiceString}api/${apiString}`).subscribe(data => this.contentData.next(data.data.attributes));
  }
}
