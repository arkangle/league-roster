import { Component, Input, OnInit } from '@angular/core';
import { CoachService } from './service';
import { Team } from '../team/team';
import { Coach } from './coach';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CoachModifyComponent } from './modify.component';

@Component({
  selector: 'coach-list',
  templateUrl: './list.component.html',
  styleUrls: ['./component.css']
})
export class CoachListComponent implements OnInit {
  @Input() team: Team;
  constructor(private service: CoachService, private modalService: NgbModal) { }
  private coaches: Coach[];
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.service.getList(this.team.id).subscribe(data => {
      this.coaches = data;
    });
  }
  runModal(coach) {
    const modal = this.modalService.open(CoachModifyComponent);
    modal.componentInstance.coach = Object.assign({}, coach);
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
  onEdit(coach) {
    this.runModal(coach);
  }
  onAdd() {
    this.runModal(new Coach(this.team.id));
  }
  onDelete(coach) {
    this.service.delete(coach).subscribe(data => {
      this.loadData();
    })
  }
}
