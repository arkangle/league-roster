import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { OrganizationListComponent } from './list.component';
import { OrganizationNewComponent } from './new.component';
import { OrganizationEditComponent } from './edit.component';

import { OrganizationRoutingModule } from './routing.module';
import { OrganizationService } from './service';

@NgModule({
  declarations: [
    OrganizationListComponent,
    OrganizationEditComponent,
    OrganizationNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrganizationRoutingModule
  ],
  providers: [OrganizationService]
})
export class OrganizationModule { }
