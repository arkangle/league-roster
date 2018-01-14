import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Organization } from './organization'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrganizationService {
  private organizationUrl = '/api/organization';
  constructor(private http: HttpClient) { }
  getList(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.organizationUrl);
  }
}
