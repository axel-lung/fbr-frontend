import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestService<User, number> {
  constructor(protected http: HttpClient) {
    super(http, `api/user/save`);
  }

  isUserInRoom(roomId: number, userId: number): Observable<boolean>{
    return this._http.get<boolean>(this.getAPI_URL() + "api/room/"+ roomId +"/user/"+ userId, this.getHttpOptions());
  }

}
