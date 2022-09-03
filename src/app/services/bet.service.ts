import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bet } from '../models/bet';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class BetService extends RestService<Bet, number> {
  constructor(protected http: HttpClient) {
    super(http, `api/bet/save`)
   }
}
