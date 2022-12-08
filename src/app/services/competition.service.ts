import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competition } from '../models/competition';
import { RestService } from '../shared/rest.service';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService extends RestService<Competition, number> {
  constructor(protected http: HttpClient) {
    super(http, `api/competition/save`)
   }
}
