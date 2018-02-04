import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrganizationService } from './service';
import { Organization } from './organization'

@Component({
  templateUrl: './modify.component.html',
  styleUrls: ['./component.css']
})
export class OrganizationModifyComponent {
  @Input() organization: Organization;
  @Output() onSubmit = new EventEmitter<Organization>();
  @Output() onCancel = new EventEmitter();
  Submit() {
    this.onSubmit.emit(this.organization);
  }
  Cancel() {
    this.onCancel.emit();
  }
}
