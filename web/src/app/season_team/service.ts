import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { sprintf } from 'sprintf-js'
import { SeasonTeam } from './season_team';
import { Team } from '../team/team';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SeasonTeamService {
  private season_teamsUrl = '/api/seasons/%s/teams';
  private season_teamUrl = '/api/seasons/teams';
  constructor(private http: HttpClient) { }

  getList(season_id): Observable<SeasonTeam[]> {
    return this.http.get<SeasonTeam[]>(sprintf(this.season_teamsUrl, season_id));
  }

  getRemainingTeams(season_id): Observable<Team[]> {
    return this.http.get<Team[]>(sprintf(this.season_teamsUrl + '/remaining', season_id));
  }

  get(id): Observable<SeasonTeam> {
    return this.http.get<SeasonTeam>(this.season_teamUrl + "/" + id);
  }

  create(data: SeasonTeam): Observable<SeasonTeam> {
    return this.http.post<SeasonTeam>(sprintf(this.season_teamsUrl, data.season_id), data);
  }

  save(data: SeasonTeam): Observable<SeasonTeam> {
    return this.create(data);
  }

  delete(data: SeasonTeam): Observable<any> {
    return this.http.delete(this.season_teamUrl + "/" + data.id);
  }
}
