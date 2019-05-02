import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CallForProposalComponent } from './call-for-proposal/call-for-proposal.component';
import { ShirtDesignComponent } from './shirt-design/shirt-design.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DividerComponent } from './divider/divider.component';
import { OrganizersComponent } from './organizers/organizers.component';
import { SpeakingDetailsComponent } from './speaking-details/speaking-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CallForProposalComponent,
    ShirtDesignComponent,
    IntroductionComponent,
    DividerComponent,
    OrganizersComponent,
    SpeakingDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
