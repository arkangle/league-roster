import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoachService } from './service';
import { Coach } from './coach'

@Component({
  templateUrl: './modify.component.html',
  styleUrls: ['./component.css']
})
export class CoachModifyComponent {
  @Input() coach: Coach;
  @Output() onSubmit = new EventEmitter<Coach>();
  @Output() onCancel = new EventEmitter();
  Submit() {
    this.onSubmit.emit(this.coach);
  }
  Cancel() {
    this.onCancel.emit();
  }
}
