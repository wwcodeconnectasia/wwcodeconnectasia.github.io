import { Component, OnInit } from '@angular/core';
import { formats } from '../../assets/data/misc';
import { codeOfConductLink } from '../../assets/data/links';
@Component({
  selector: 'app-speaking-details',
  templateUrl: './speaking-details.component.html',
  styleUrls: ['./speaking-details.component.scss']
})
export class SpeakingDetailsComponent implements OnInit {
  formats: string[];
  codeOfConductLink: string;

  constructor() { }

  ngOnInit() {
    this.formats = formats;
    this.codeOfConductLink = codeOfConductLink;
  }

}
