import { Component, Input, OnInit } from '@angular/core';
import { SeasonTeamService } from './service';
import { Season } from '../season/season';
import { Team } from '../team/team';
import { SeasonTeam } from './season_team';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SeasonTeamModifyComponent } from './modify.component';

@Component({
  selector: 'season-team-list',
  templateUrl: './list.component.html',
  styleUrls: ['./component.css']
})
export class SeasonTeamListComponent implements OnInit {
  @Input() season: Season;
  constructor(private service: SeasonTeamService, private modalService: NgbModal) { }
  private season_teams: SeasonTeam[];
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.service.getList(this.season.id).subscribe(data => {
      this.season_teams = data;
    });
  }
  runModal(season_team) {
    const modal = this.modalService.open(SeasonTeamModifyComponent);
    modal.componentInstance.season_team = Object.assign({}, season_team);
    modal.componentInstance.onSubmit.subscribe(($e) => {
      this.service.save($e).subscribe(data => {
        this.loadData();
        modal.close();
      })
    })
    modal.componentInstance.onCancel.subscribe(($e) => {
      modal.close();
    })
  }
  onAdd() {
    this.runModal(new SeasonTeam(this.season.id));
  }
  onDelete(season_team) {
    this.service.delete(season_team).subscribe(data => {
      this.loadData();
    })
  }
}
