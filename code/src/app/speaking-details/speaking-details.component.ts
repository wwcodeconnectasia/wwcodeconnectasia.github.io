import { Component, OnInit } from '@angular/core';
import { formats } from '../../assets/data/misc';

@Component({
  selector: 'app-speaking-details',
  templateUrl: './speaking-details.component.html',
  styleUrls: ['./speaking-details.component.scss']
})
export class SpeakingDetailsComponent implements OnInit {
  formats: string[];

  constructor() { }

  ngOnInit() {
    this.formats = formats;
  }

}
