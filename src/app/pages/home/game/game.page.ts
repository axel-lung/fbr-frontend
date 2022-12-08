import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/shared/rooms/models/room';
import { RoomFacadeService } from 'src/app/shared/rooms/state/room.facade';
import { UserFacadeService } from 'src/app/shared/users/state/user.facade';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  createdRooms$!: Observable<Room[]>;

  constructor(
    private roomFacade: RoomFacadeService,
    public userFacade: UserFacadeService
  ) {}

  ngOnInit() {
    this.createdRooms$ = this.roomFacade.createdRooms$;
  }

  toRoom(id: number) {
    this.roomFacade.toRoom(id);
  }
}
