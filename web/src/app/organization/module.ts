import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { OrganizationListComponent } from './list.component';
import { OrganizationRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    OrganizationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrganizationRoutingModule
  ],
  providers: []
})
export class OrganizationModule { }
