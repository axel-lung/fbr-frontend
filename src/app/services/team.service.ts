import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService extends RestService<Team, number> {
  constructor(protected http: HttpClient) {
    super(http, `api/team/save`)
   }
}
