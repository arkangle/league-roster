import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationMainComponent } from './organization/main.component';
import { OrganizationViewComponent } from './organization/view.component';

const appRoutes: Routes = [
  { path: 'organizations',   component: OrganizationMainComponent },
  { path: 'organizations/:id',   component: OrganizationViewComponent },
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
