import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() homeText!: string;
  @Input() siteName!: string;
  @Input() siteSubname!: string;
  @Input() city!: string;

  constructor() { }

  ngOnInit(): void { }

}
