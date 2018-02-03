import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LeagueService } from './service';
import { League } from './league'

@Component({
  templateUrl: './modify.component.html',
  styleUrls: ['./component.css']
})
export class LeagueModifyComponent {
  @Input() league: League;
  @Output() onSubmit = new EventEmitter<League>();
  @Output() onCancel = new EventEmitter();
  constructor(private service: LeagueService) { }
  Submit() {
    this.onSubmit.emit(this.league);
  }
  Cancel() {
    this.onCancel.emit();
  }
}
