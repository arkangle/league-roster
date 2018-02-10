import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { sprintf } from 'sprintf-js'
import { Season } from './season';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SeasonService {
  private seasonsUrl = '/api/leagues/%s/seasons';
  private seasonUrl = '/api/seasons';
  constructor(private http: HttpClient) { }

  getList(league_id): Observable<Season[]> {
    return this.http.get<Season[]>(sprintf(this.seasonsUrl, league_id));
  }

  get(id): Observable<Season> {
    return this.http.get<Season>(this.seasonUrl + "/" + id);
  }

  create(data: Season): Observable<Season> {
    return this.http.post<Season>(sprintf(this.seasonsUrl, data.league_id), data);
  }

  update(data: Season): Observable<Season> {
    return this.http.put<Season>(this.seasonUrl + "/" + data.id, data);
  }

  save(data: Season): Observable<Season> {
    if(data.id == -1) {
      return this.create(data);
    } else {
      return this.update(data);
    }
  }

  delete(data: Season): Observable<any> {
    return this.http.delete(this.seasonUrl + "/" + data.id);
  }
}
