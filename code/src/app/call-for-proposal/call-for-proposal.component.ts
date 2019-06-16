import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Context } from '../context.enum';
import { email } from 'src/assets/data/misc';

@Component({
  selector: 'app-call-for-proposal',
  templateUrl: './call-for-proposal.component.html',
  styleUrls: ['./call-for-proposal.component.scss']
})
export class CallForProposalComponent implements OnInit {
  context = Context;
  @Input() closed: boolean;
  email = email;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
  }

  redirect(context: Context) {
    this.navigationService.redirect(context);
  }

}
