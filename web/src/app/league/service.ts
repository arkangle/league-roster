import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { sprintf } from 'sprintf-js'
import { League } from './league';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeagueService {
  private leaguesUrl = '/api/organizations/%s/leagues';
  private leagueUrl = '/api/leagues';
  constructor(private http: HttpClient) { }

  getList(id): Observable<League[]> {
    return this.http.get<League[]>(sprintf(this.leaguesUrl, id));
  }

  get(id): Observable<League> {
    return this.http.get<League>(this.leagueUrl + "/" + id);
  }

  create(data: League): Observable<League> {
    return this.http.post<League>(sprintf(this.leaguesUrl, data.organization_id), data);
  }

  update(data: League): Observable<League> {
    return this.http.put<League>(this.leagueUrl + "/" + data.id, data);
  }

  save(data: League): Observable<League> {
    if(data.id == -1) {
      return this.create(data);
    } else {
      return this.update(data);
    }
  }

  delete(data: League): Observable<any> {
    return this.http.delete(this.leagueUrl + "/" + data.id);
  }
}
