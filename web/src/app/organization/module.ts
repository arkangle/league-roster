import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrganizationMainComponent } from './main.component';
import { OrganizationModifyComponent } from './modify.component';
import { OrganizationViewComponent } from './view.component';

import { OrganizationRoutingModule } from './routing.module';
import { OrganizationService } from './service';

@NgModule({
  declarations: [
    OrganizationMainComponent,
    OrganizationViewComponent,
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
