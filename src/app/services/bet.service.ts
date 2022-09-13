import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bet } from '../models/bet';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class BetService extends RestService<Bet, number> {
  constructor(protected http: HttpClient) {
    super(http, `api/bet/save`)
   }

   findBetByUserMatchRoom(userId: number, matchId: number, roomId: number): Observable<Bet>{
    return this._http.get<Bet>(this.getAPI_URL() + "api/bet/user/"+ userId+"/match/"+matchId+"/room/"+roomId,
                                this.getHttpOptions());
  }


}
