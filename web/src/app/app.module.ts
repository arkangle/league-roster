import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AutoFocusDirective } from './directives/autofocus';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { OrganizationModule } from './organization/module';
import { LeagueModule } from './league/module';

@NgModule({
  declarations: [
    AutoFocusDirective,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    OrganizationModule,
    LeagueModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
