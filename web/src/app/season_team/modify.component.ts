import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SeasonTeamService } from './service';
import { SeasonTeam } from './season_team'
import { Team } from '../team/team'

@Component({
  templateUrl: './modify.component.html',
  styleUrls: ['./component.css']
})
export class SeasonTeamModifyComponent implements OnInit {
  @Input() season_team: SeasonTeam;
  @Output() onSubmit = new EventEmitter<SeasonTeam>();
  @Output() onCancel = new EventEmitter();
  public teams: Team[];
  constructor(private service: SeasonTeamService) { }
  ngOnInit() {
    this.loadData(this.season_team.season_id);
  }

  loadData(season_id) {
    this.service.getRemainingTeams(season_id).subscribe(data => {
      this.teams = data;
    });
  }
  Submit() {
    this.onSubmit.emit(this.season_team);
  }
  Cancel() {
    this.onCancel.emit();
  }
}
