import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeasonService } from './service';
import { Season } from './season';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./component.css']
})
export class SeasonViewComponent implements OnInit {
  constructor(private service: SeasonService, private route: ActivatedRoute) { }
  private season: Season;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadData(+params['id']);
    });
  }
  loadData(id) {
    this.service.get(id).subscribe(data => {
      this.season = data;
    });
  }
}
