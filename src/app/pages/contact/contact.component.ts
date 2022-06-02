import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { SecretKey } from 'src/app/_enum/SecretKey';
import { ContactDTO } from 'src/app/_models/contentData';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElement!: ElementRef;
  @Input() contact!: ContactDTO;
  @Input() siteName!: string;

  private map!: google.maps.Map;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
   this.setGoogleMap();
  }

  setGoogleMap() {
    new Loader(
      {apiKey: SecretKey.GOOGLE_API_KEY
    }).load().then(() => {
      const mapOptions = {
        center: {
          lat: 45.2380933,
          lng: 21.0271339
        },
        zoom: 15
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      new google.maps.Marker({
        position: mapOptions.center,
        map: this.map
      })
    });
  }
}
