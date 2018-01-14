import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { OrganizationListComponent } from './list.component';
import { OrganizationRoutingModule } from './routing.module';
import { OrganizationService } from './service';

@NgModule({
  declarations: [
    OrganizationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    OrganizationRoutingModule
  ],
  providers: [OrganizationService]
})
export class OrganizationModule { }
