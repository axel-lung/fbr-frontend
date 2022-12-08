import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/shared/rest.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestService<User, number> {
  constructor(protected http: HttpClient) {
    super(http, `api/user`);
  }

  isUserInRoom(roomId: number, userId: number): Observable<boolean>{
    return this._http.get<boolean>(this.getAPI_URL() + "api/room/"+ roomId +"/user/"+ userId, this.getHttpOptions());
  }

}
