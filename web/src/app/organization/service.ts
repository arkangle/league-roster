import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Organization } from './organization';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrganizationService {
  private organizationUrl = '/api/organizations';
  constructor(private http: HttpClient) { }

  getList(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.organizationUrl);
  }

  get(id): Observable<Organization> {
    return this.http.get<Organization>(this.organizationUrl + "/" + id);
  }

  create(data: Organization): Observable<Organization> {
    return this.http.post<Organization>(this.organizationUrl, data);
  }

  update(data: Organization): Observable<Organization> {
    return this.http.put<Organization>(this.organizationUrl + "/" + data.id, data);
  }

  save(data: Organization): Observable<Organization> {
    if(data.id == -1) {
      return this.create(data);
    } else {
      return this.update(data);
    }
  }

  delete(data: Organization): Observable<any> {
    return this.http.delete(this.organizationUrl + "/" + data.id);
  }
}
