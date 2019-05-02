import { Component, OnInit } from '@angular/core';
import organizers from '../../assets/data/organizers';
import { tShirtContestLink, speakerProfileLink, callForProposalLink } from '../../assets/data/links';
import { email, hashtags } from '../../assets/data/misc';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  wwcodeLogoSrc = '../../assets/images/wwc_logo.jpeg';
  speakerSrc = '../../assets/images/speaker.png';
  countries = organizers;
  hashtags: string[];
  email: string;

  constructor() {
    this.hashtags = hashtags;
    this.email = email;
  }

  ngOnInit() {
  }


  redirect(destination: string) {
    let link;
    switch (destination) {
      case 'shirt-design':
        link = tShirtContestLink;
        break;
      case 'cfp':
        link = callForProposalLink;
        break;
      case 'speaker':
        link = speakerProfileLink;
        break;
      default:
        link = destination;
        break;
    }

    window.open(
      link,
      '_blank'
    );
  }

}
