import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationMainComponent } from './main.component';

const appRoutes: Routes = [
  { path: 'organization',   component: OrganizationMainComponent },
  { path: '',   redirectTo: 'organization', pathMatch: 'full' }
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

export class OrganizationRoutingModule {}
