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

@NgModule({
  declarations: [
    AutoFocusDirective,
    OrganizationMainComponent,
    OrganizationViewComponent,
    OrganizationModifyComponent,
    LeagueViewComponent,
    LeagueListComponent,
    LeagueModifyComponent,
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
    LeagueService
  ],
  entryComponents: [
    OrganizationModifyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
