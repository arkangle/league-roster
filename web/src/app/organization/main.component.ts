import { Component, OnInit } from '@angular/core';
import { OrganizationService } from './service';
import { Organization } from './organization';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrganizationModifyComponent } from './modify.component';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./component.css']
})
export class OrganizationMainComponent implements OnInit {
  constructor(private service: OrganizationService, private modalService: NgbModal) { }
  private organizations: Organization[];
  private currentOrganization: Organization;
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.service.getList().subscribe(data => {
      this.organizations = data;
    });
  }
  runModal(organization) {
    const modal = this.modalService.open(OrganizationModifyComponent);
    modal.componentInstance.organization = Object.assign({}, organization);
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
  onEdit(organization) {
    this.runModal(organization);
  }
  onAdd() {
    this.runModal(new Organization());
  }
  onDelete(organization) {
    this.service.delete(organization).subscribe(data => {
      this.loadData();
    })
  }
}
