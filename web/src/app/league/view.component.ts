import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from './service';
import { League } from './league';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./component.css']
})
export class LeagueViewComponent implements OnInit {
  constructor(private service: LeagueService, private route: ActivatedRoute) { }
  private league: League;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadData(+params['id']);
    });
  }
  loadData(id) {
    this.service.get(id).subscribe(data => {
      this.league = data;
    });
  }
}
