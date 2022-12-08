import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from '../models/room';
import { RestService } from '../../rest.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends RestService<Room, number> {

  private roomId = new BehaviorSubject(0);
  currentRoomId = this.roomId.asObservable();

  constructor(protected http: HttpClient) {
    super(http, `api/room`);
  }

  setRoomId(id: number){
    this.roomId.next(id);
  }

  addUserInRoom(roomId: number, userId: number, body: HttpParams): Observable<Room>{
    return this._http.post<Room>(this.getAPI_URL() + "api/room/adduser", {userId: userId, roomId: roomId}, this.getHttpOptions());
  }
}
