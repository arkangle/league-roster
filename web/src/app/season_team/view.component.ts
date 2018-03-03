import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeasonTeamService } from './service';
import { SeasonTeam } from './season_team';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./component.css']
})
export class SeasonTeamViewComponent implements OnInit {
  constructor(private service: SeasonTeamService, private route: ActivatedRoute) { }
  private season_team: SeasonTeam;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadData(+params['id']);
    });
  }
  loadData(id) {
    this.service.get(id).subscribe(data => {
      this.season_team = data;
    });
  }
}
