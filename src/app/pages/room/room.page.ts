import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  id: number;
  room: Room;
  matches: Match[];

  constructor(private roomService: RoomService) {}

  async ngOnInit() {
    this.roomService.currentRoomId.subscribe((data) => {
      this.id = data;
    });

    this.getRoom(this.id).then((data) => {
      this.room = data;
      this.matches = data.matches;
    });
  }

  async getRoom(id: number): Promise<Room> {
    return await this.roomService.findOne(id).toPromise();
  }
}
