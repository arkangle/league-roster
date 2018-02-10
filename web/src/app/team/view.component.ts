import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from './service';
import { Team } from './team';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./component.css']
})
export class TeamViewComponent implements OnInit {
  constructor(private service: TeamService, private route: ActivatedRoute) { }
  private team: Team;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadData(+params['id']);
    });
  }
  loadData(id) {
    this.service.get(id).subscribe(data => {
      this.team = data;
    });
  }
}
