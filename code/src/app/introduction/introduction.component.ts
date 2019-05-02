import { Component, OnInit } from '@angular/core';
import { hashtags } from '../../assets/data/misc';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  hashtags: string[];

  constructor() { }

  ngOnInit() {
    this.hashtags = hashtags;
  }

}
