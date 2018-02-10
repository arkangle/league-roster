import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AutoFocusDirective } from './directives/autofocus';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { OrganizationMainComponent } from './organization/main.component';
import { OrganizationModifyComponent } from './organization/modify.component';
import { OrganizationViewComponent } from './organization/view.component';
import { OrganizationService } from './organization/service';

import { LeagueModifyComponent } from './league/modify.component';
import { LeagueViewComponent } from './league/view.component';
import { LeagueListComponent } from './league/list.component';
import { LeagueService } from './league/service';

import { SeasonModifyComponent } from './season/modify.component';
import { SeasonViewComponent } from './season/view.component';
import { SeasonListComponent } from './season/list.component';
import { SeasonService } from './season/service';

import { TeamModifyComponent } from './team/modify.component';
import { TeamViewComponent } from './team/view.component';
import { TeamListComponent } from './team/list.component';
import { TeamService } from './team/service';

import { CoachModifyComponent } from './coach/modify.component';
import { CoachViewComponent } from './coach/view.component';
import { CoachListComponent } from './coach/list.component';
import { CoachService } from './coach/service';

@NgModule({
  declarations: [
    AutoFocusDirective,
    OrganizationMainComponent,
    OrganizationViewComponent,
    OrganizationModifyComponent,
    LeagueViewComponent,
    LeagueListComponent,
    LeagueModifyComponent,
    SeasonViewComponent,
    SeasonListComponent,
    SeasonModifyComponent,
    TeamViewComponent,
    TeamListComponent,
    TeamModifyComponent,
    CoachViewComponent,
    CoachListComponent,
    CoachModifyComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    OrganizationService,
    LeagueService,
    SeasonService,
    TeamService,
    CoachService
  ],
  entryComponents: [
    OrganizationModifyComponent,
    LeagueModifyComponent,
    SeasonModifyComponent,
    TeamModifyComponent,
    CoachModifyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
