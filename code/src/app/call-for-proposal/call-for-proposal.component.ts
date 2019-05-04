import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Context } from '../context.enum';

@Component({
  selector: 'app-call-for-proposal',
  templateUrl: './call-for-proposal.component.html',
  styleUrls: ['./call-for-proposal.component.scss']
})
export class CallForProposalComponent implements OnInit {
  context = Context;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
  }

  redirect(context: Context) {
    this.navigationService.redirect(context);
  }

}
