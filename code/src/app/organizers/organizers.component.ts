import { Component, OnInit } from '@angular/core';
import organizers from '../../assets/data/organizers';
import { email } from '../../assets/data/misc';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.scss']
})
export class OrganizersComponent implements OnInit {
  countries: any[];
  email: string;
  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.email = email;
    this.countries = organizers;
  }

  redirect(context: string) {
    this.navigationService.redirect(context);
  }

}
