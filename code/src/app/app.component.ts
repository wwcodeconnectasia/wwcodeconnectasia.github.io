import { Component } from '@angular/core';
import organizers from '../assets/data/organizers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  speakerProfileLink = 'http://goo.gl/forms/YrRPwmaefr3Kf43q2';
  callForProposalLink = 'http://goo.gl/forms/yHvVXsgAffutFM5x1';
  wwcodeLogoSrc = '../assets/images/wwc_logo.jpeg';
  speakerSrc = '../assets/images/speaker.png';

  countries = organizers;

  redirect(destination: string) {
    let link;
    switch (destination) {
      case 'cfp':
        link = this.callForProposalLink;
        break;
      case 'speaker':
        link = this.speakerProfileLink;
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
