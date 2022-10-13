import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room } from 'src/app/models/room';
import { User } from 'src/app/models/user';
import { RoomService } from 'src/app/services/room.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  createdRooms: Room[];
  playingRooms: Room[];
  finishedRooms: Room[];
  date: Date;
  accessToken: string;
  rooms$: Observable<Room[]>;
  user$: Observable<User>;

  constructor(private roomService: RoomService, private router: Router, private userService: UserService,
    private storage: NativeStorage) {}

  async ngOnInit() {
    this.date = new Date();
    await this.roomService.start();
    const userStorage = await this.storage.getItem('USER');
    this.user$ = this.userService.findOne(userStorage.USER_ID);
    this.rooms$ = this.roomService.getAll();
    this.getCreatedRooms().then(rooms => this.createdRooms = rooms);
    this.getPlayingRooms().then(rooms => this.playingRooms = rooms);
    this.getFinishedRooms().then(rooms => this.finishedRooms = rooms);
  }

  getCreatedRooms(): Promise<Room[]> {
		return this.rooms$.pipe(
      map(
        rooms => rooms.filter(room => room.status == 'CREATED')
      )
    ).toPromise();
	}
  getPlayingRooms(): Promise<Room[]> {
		return this.user$.pipe(
      map(
        user => user.rooms.filter(room => room.status == 'PLAYING')
      )
    ).toPromise();
	}
  getFinishedRooms(): Promise<Room[]> {
		return this.user$.pipe(
      map(
        user => user.rooms.filter(room => room.status == 'FINISHED')
      )
    ).toPromise();
	}

  toRoom(id: number){
    this.router.navigateByUrl('/room');
    this.roomService.setRoomId(id);
  }
}
