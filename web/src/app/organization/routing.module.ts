import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationListComponent } from './list.component';
import { OrganizationNewComponent } from './new.component';
import { OrganizationEditComponent } from './edit.component';
import { OrganizationViewComponent } from './view.component';

const appRoutes: Routes = [
  { path: 'organization/new',   component: OrganizationNewComponent },
  { path: 'organization/list',   component: OrganizationListComponent },
  { path: 'organization/:id/edit',   component: OrganizationEditComponent },
  { path: 'organization/:id',   component: OrganizationViewComponent },
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
