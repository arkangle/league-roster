import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TeamService } from './service';
import { Team } from './team'

@Component({
  templateUrl: './modify.component.html',
  styleUrls: ['./component.css']
})
export class TeamModifyComponent {
  @Input() team: Team;
  @Output() onSubmit = new EventEmitter<Team>();
  @Output() onCancel = new EventEmitter();
  Submit() {
    this.onSubmit.emit(this.team);
  }
  Cancel() {
    this.onCancel.emit();
  }
}
