import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from '../models/match';
import { RestService } from '../shared/rest.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService extends RestService<Match, number> {
  constructor(protected http: HttpClient) {
    super(http, `api/matche/save`)
   }
}
