import { Component, OnInit } from '@angular/core';
import { hashtags, email } from '../../assets/data/misc';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  hashtags: string[];
  email: string;
  addToCalendarLink: string;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.hashtags = hashtags;
    this.email = email;
    const description = 'Stay tuned to our updates on wwcodeconnectasia.github.io';
    const eventName = 'Women Who Code Connect Asia Conference';
    const dates = '20190831T003000Z/20190831T100000Z';
    const location = 'Lifelong Learning Institute, 11 Eunos Rd 8, Singapore 408601';

    this.addToCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&`
      + `text=${eventName}&dates=${dates}&details=${description}&location=${location}`;
  }

}
