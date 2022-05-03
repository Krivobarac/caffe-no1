import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElement!: ElementRef;

  private map!: google.maps.Map;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
   this.setGoogleMap();
  }

  setGoogleMap() {
    new Loader(
      {apiKey: 'AIzaSyAD9OAQWMpmOenVt9mE6_5aR0pM6bkh6AY'
    }).load().then(() => {
      console.log('Loaded Map!');

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
