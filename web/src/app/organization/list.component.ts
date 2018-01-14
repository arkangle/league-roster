import { Component, OnInit } from '@angular/core';
import { OrganizationService } from './service';
import { Organization } from './organization'

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./component.css']
})
export class OrganizationListComponent implements OnInit {
  constructor(private service: OrganizationService) { }
  private organizations: Organization[];
  ngOnInit() {
    this.service.getList().subscribe(data => {
      this.organizations = data;
    });
  }
}
