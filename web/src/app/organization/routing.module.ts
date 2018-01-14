import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationListComponent } from './list.component';

const appRoutes: Routes = [
  { path: 'organization/list',   component: OrganizationListComponent},
  { path: '',   redirectTo: 'organization/list', pathMatch: 'full' }
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
