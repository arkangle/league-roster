import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoachService } from './service';
import { Coach } from './coach';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./component.css']
})
export class CoachViewComponent implements OnInit {
  constructor(private service: CoachService, private route: ActivatedRoute) { }
  private coach: Coach;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadData(+params['id']);
    });
  }
  loadData(id) {
    this.service.get(id).subscribe(data => {
      this.coach = data;
    });
  }
}
