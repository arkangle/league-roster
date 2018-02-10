import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationMainComponent } from './organization/main.component';
import { OrganizationViewComponent } from './organization/view.component';
import { LeagueViewComponent } from './league/view.component';
import { SeasonViewComponent } from './season/view.component';
import { TeamViewComponent } from './team/view.component';
import { CoachViewComponent } from './coach/view.component';

const appRoutes: Routes = [
  { path: 'organizations',   component: OrganizationMainComponent },
  { path: 'organizations/:id',   component: OrganizationViewComponent },
  { path: 'leagues/:id',   component: LeagueViewComponent },
  { path: 'seasons/:id',   component: SeasonViewComponent },
  { path: 'teams/:id',   component: TeamViewComponent },
  { path: 'coaches/:id',   component: CoachViewComponent },
  { path: '',   redirectTo: 'organizations', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
