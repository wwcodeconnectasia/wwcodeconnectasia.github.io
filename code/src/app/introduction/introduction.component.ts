import { Component, OnInit } from '@angular/core';
import { hashtags, email } from '../../assets/data/misc';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  hashtags: string[];
  email: string;

  constructor() { }

  ngOnInit() {
    this.hashtags = hashtags;
    this.email = email;
  }

}
