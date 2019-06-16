import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Context } from '../context.enum';

@Component({
  selector: 'app-shirt-design',
  templateUrl: './shirt-design.component.html',
  styleUrls: ['./shirt-design.component.scss']
})
export class ShirtDesignComponent implements OnInit {
  context = Context;
  @Input() closed: boolean;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
  }

  redirect(context: Context) {
    this.navigationService.redirect(context);
  }

}
