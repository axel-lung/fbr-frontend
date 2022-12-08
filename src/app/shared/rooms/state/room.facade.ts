import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Room } from '../models/room';
import { RoomService } from '../services/room.service';
import { GetRooms } from './room.action';
import { RoomSelect } from './room.select';

@Injectable({
  providedIn: 'root',
})
export class RoomFacadeService {
  @Select(RoomSelect.getCreatedRooms)
  createdRooms$!: Observable<Room[]>;

  @Select(RoomSelect.getPlayingRooms)
  playingRooms$!: Observable<Room[]>;

  @Select(RoomSelect.getFinishedRooms)
  finishedRooms$!: Observable<Room[]>;

  constructor(
    private store: Store,
    private router: Router,
    private roomService: RoomService
  ) {}

  getRooms(): void {
    this.store.dispatch(new GetRooms());
  }

  toRoom(id: number) {
    this.router.navigateByUrl('/room');
    this.roomService.setRoomId(id);
  }
}
