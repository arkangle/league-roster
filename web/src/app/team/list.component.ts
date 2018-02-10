import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from './service';
import { League } from '../league/league';
import { Team } from './team';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamModifyComponent } from './modify.component';

@Component({
  selector: 'team-list',
  templateUrl: './list.component.html',
  styleUrls: ['./component.css']
})
export class TeamListComponent implements OnInit {
  @Input() league: League;
  constructor(private service: TeamService, private modalService: NgbModal) { }
  private teams: Team[];
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.service.getList(this.league.id).subscribe(data => {
      this.teams = data;
    });
  }
  runModal(team) {
    const modal = this.modalService.open(TeamModifyComponent);
    modal.componentInstance.team = Object.assign({}, team);
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
  onEdit(team) {
    this.runModal(team);
  }
  onAdd() {
    this.runModal(new Team(this.league.id));
  }
  onDelete(team) {
    this.service.delete(team).subscribe(data => {
      this.loadData();
    })
  }
}
