import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SeasonService } from './service';
import { Season } from './season'

@Component({
  templateUrl: './modify.component.html',
  styleUrls: ['./component.css']
})
export class SeasonModifyComponent {
  @Input() season: Season;
  @Output() onSubmit = new EventEmitter<Season>();
  @Output() onCancel = new EventEmitter();
  Submit() {
    this.onSubmit.emit(this.season);
  }
  Cancel() {
    this.onCancel.emit();
  }
}
