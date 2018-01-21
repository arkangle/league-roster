import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrganizationListComponent } from './list.component';
import { OrganizationNewComponent } from './new.component';
import { OrganizationEditComponent } from './edit.component';
import { OrganizationViewComponent } from './view.component';
import { OrganizationMainComponent } from './main.component';
import { OrganizationModifyComponent } from './modify.component';

import { OrganizationRoutingModule } from './routing.module';
import { OrganizationService } from './service';

import { AutoFocusDirective } from '../directives/autofocus';

@NgModule({
  declarations: [
    AutoFocusDirective,
    OrganizationListComponent,
    OrganizationEditComponent,
    OrganizationViewComponent,
    OrganizationMainComponent,
    OrganizationModifyComponent,
    OrganizationNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    OrganizationRoutingModule
  ],
  providers: [OrganizationService]
})
export class OrganizationModule { }
