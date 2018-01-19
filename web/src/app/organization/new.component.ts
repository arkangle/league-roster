import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationService } from './service';
import { Organization } from './organization'

@Component({
  templateUrl: './modify.component.html',
  styleUrls: ['./component.css']
})
export class OrganizationNewComponent implements OnInit {
  constructor(private service: OrganizationService, private router: Router) { }
  private organization: Organization;
  ngOnInit() {
    this.organization = new Organization();
    this.organization.active = true;
  }
  onSubmit() {
    this.service.create(this.organization).subscribe(data => {
      this.router.navigate(['/organization/list'])
    })
  }
  onCancel() {
    this.router.navigate(['/organization/list'])
  }
}
