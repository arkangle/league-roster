import { Component, Input, OnInit } from '@angular/core';
import { SeasonService } from './service';
import { League } from '../league/league';
import { Season } from './season';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SeasonModifyComponent } from './modify.component';

@Component({
  selector: 'season-list',
  templateUrl: './list.component.html',
  styleUrls: ['./component.css']
})
export class SeasonListComponent implements OnInit {
  @Input() league: League;
  constructor(private service: SeasonService, private modalService: NgbModal) { }
  private seasons: Season[];
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.service.getList(this.league.id).subscribe(data => {
      this.seasons = data;
    });
  }
  runModal(season) {
    const modal = this.modalService.open(SeasonModifyComponent);
    modal.componentInstance.season = Object.assign({}, season);
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
  onEdit(season) {
    this.runModal(season);
  }
  onAdd() {
    this.runModal(new Season(this.league.id));
  }
  onDelete(season) {
    this.service.delete(season).subscribe(data => {
      this.loadData();
    })
  }
}
