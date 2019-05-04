import { Component, OnInit } from '@angular/core';
import { email, hashtags } from '../../assets/data/misc';
import organizers from '../../assets/data/organizers';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  countries = organizers;
  hashtags: string[];
  email: string;

  constructor() {
    this.hashtags = hashtags;
    this.email = email;
  }

  ngOnInit() {
  }

}
