import { Injectable } from '@angular/core';
import { tShirtContestLink, callForProposalLink, speakerProfileLink } from 'src/assets/data/links';
import { Context } from './context.enum';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  redirect(context: Context | string) {
    let link;
    switch (context) {
      case Context.TShirtDesignContest:
        link = tShirtContestLink;
        break;
      case Context.CallForProposal:
        link = callForProposalLink;
        break;
      case Context.SpeakerProfile:
        link = speakerProfileLink;
        break;
      default:
        link = context;
        break;
    }

    window.open(
      link,
      '_blank'
    );
  }
}
