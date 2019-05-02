import { Component, OnInit } from '@angular/core';
import organizers from '../../assets/data/organizers';
import { email } from '../../assets/data/misc';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.scss']
})
export class OrganizersComponent implements OnInit {
  countries: any[];
  email: string;
  constructor() { }

  ngOnInit() {
    console.log(organizers);
    this.email = email;
    this.countries = organizers;
  }

}
