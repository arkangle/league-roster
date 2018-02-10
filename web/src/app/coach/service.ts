import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { sprintf } from 'sprintf-js'
import { Coach } from './coach';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoachService {
  private coachesUrl = '/api/teams/%s/coaches';
  private coachUrl = '/api/coaches';
  constructor(private http: HttpClient) { }

  getList(team_id): Observable<Coach[]> {
    return this.http.get<Coach[]>(sprintf(this.coachesUrl, team_id));
  }

  get(id): Observable<Coach> {
    return this.http.get<Coach>(this.coachUrl + "/" + id);
  }

  create(data: Coach): Observable<Coach> {
    return this.http.post<Coach>(sprintf(this.coachesUrl, data.team_id), data);
  }

  update(data: Coach): Observable<Coach> {
    return this.http.put<Coach>(this.coachUrl + "/" + data.id, data);
  }

  save(data: Coach): Observable<Coach> {
    if(data.id == -1) {
      return this.create(data);
    } else {
      return this.update(data);
    }
  }

  delete(data: Coach): Observable<any> {
    return this.http.delete(this.coachUrl + "/" + data.id);
  }
}
