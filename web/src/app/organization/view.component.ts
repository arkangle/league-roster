import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from './service';
import { Organization } from './organization';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./component.css']
})
export class OrganizationViewComponent implements OnInit {
  constructor(private service: OrganizationService, private route: ActivatedRoute) { }
  private organization: Organization;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadData(+params['id']);
    });
  }
  loadData(id) {
    this.service.get(id).subscribe(data => {
      this.organization = data;
    });
  }
}
