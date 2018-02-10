import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { sprintf } from 'sprintf-js'
import { Team } from './team';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamService {
  private teamsUrl = '/api/leagues/%s/teams';
  private teamUrl = '/api/teams';
  constructor(private http: HttpClient) { }

  getList(id): Observable<Team[]> {
    return this.http.get<Team[]>(sprintf(this.teamsUrl, id));
  }

  get(id): Observable<Team> {
    return this.http.get<Team>(this.teamUrl + "/" + id);
  }

  create(data: Team): Observable<Team> {
    return this.http.post<Team>(sprintf(this.teamsUrl, data.league_id), data);
  }

  update(data: Team): Observable<Team> {
    return this.http.put<Team>(this.teamUrl + "/" + data.id, data);
  }

  save(data: Team): Observable<Team> {
    if(data.id == -1) {
      return this.create(data);
    } else {
      return this.update(data);
    }
  }

  delete(data: Team): Observable<any> {
    return this.http.delete(this.teamUrl + "/" + data.id);
  }
}
