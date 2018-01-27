import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrganizationMainComponent } from './main.component';
import { OrganizationModifyComponent } from './modify.component';

import { OrganizationRoutingModule } from './routing.module';
import { OrganizationService } from './service';

import { AutoFocusDirective } from '../directives/autofocus';

@NgModule({
  declarations: [
    AutoFocusDirective,
    OrganizationMainComponent,
    OrganizationModifyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    OrganizationRoutingModule
  ],
  entryComponents: [
    OrganizationModifyComponent
  ],
  providers: [OrganizationService]
})
export class OrganizationModule { }
