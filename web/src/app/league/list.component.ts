import { Component, Input, OnInit } from '@angular/core';
import { LeagueService } from './service';
import { Organization } from '../organization/organization';
import { League } from './league';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LeagueModifyComponent } from './modify.component';

@Component({
  selector: 'league-list',
  templateUrl: './list.component.html',
  styleUrls: ['./component.css']
})
export class LeagueListComponent implements OnInit {
  @Input() organization: Organization;
  constructor(private service: LeagueService, private modalService: NgbModal) { }
  private leagues: League[];
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.service.getList(this.organization.id).subscribe(data => {
      this.leagues = data;
    });
  }
  runModal(league) {
    const modal = this.modalService.open(LeagueModifyComponent);
    modal.componentInstance.league = Object.assign({}, league);
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
  onEdit(league) {
    this.runModal(league);
  }
  onAdd() {
    this.runModal(new League(this.organization.id));
  }
  onDelete(league) {
    this.service.delete(league).subscribe(data => {
      this.loadData();
    })
  }
}
