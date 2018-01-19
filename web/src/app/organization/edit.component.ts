import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationService } from './service';
import { Organization } from './organization'

@Component({
  templateUrl: './modify.component.html',
  styleUrls: ['./component.css']
})
export class OrganizationEditComponent implements OnInit {
  constructor(private service: OrganizationService, private router: Router, private route: ActivatedRoute) { }
  private organization: Organization;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.get(id).subscribe(data => {
      this.organization = data;
    })
  }
  onSubmit() {
    this.service.save(this.organization).subscribe(data => {
      this.router.navigate(['/organization/list'])
    })
  }
  onCancel() {
    this.router.navigate(['/organization/list'])
  }
  onDelete() {
    this.service.delete(this.organization).subscribe(data => {
      this.router.navigate(['/organization/list'])
    })
  }
}
