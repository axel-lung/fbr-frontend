import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Bet } from 'src/app/models/bet';
import { Match } from 'src/app/models/match';
import { Room } from 'src/app/models/room';
import { Team } from 'src/app/models/team';
import { User } from 'src/app/models/user';
import { BetService } from 'src/app/services/bet.service';
import { RoomService } from 'src/app/services/room.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  id: number;
  room: Room;
  matches: Match[];
  userId: number;
  isUserInRoom: boolean;
  isBetOnMatch: Map<number, boolean> = new Map<number, boolean>;
  bets: Map<number, Bet> = new Map<number, Bet>;

  constructor(
    private roomService: RoomService,
    private storage: NativeStorage,
    private userService: UserService,
    private router: Router,
    private betService: BetService
  ) {}

  async ngOnInit() {
    this.roomService.currentRoomId.subscribe((data) => {
      this.id = data;
    });

    await this.getRoom(this.id).then((data) => {
      this.room = data;
      this.matches = data.matches;
    });

    await this.storage.getItem('USER').then((data) => {
      this.userId = data.USER_ID;
    });

    this.userService
      .isUserInRoom(this.id, this.userId)
      .toPromise()
      .then((data) => {
        this.isUserInRoom = data.valueOf();
      });

    await this.getBet();
  }

  async addUserInRoom() {
    let body = new HttpParams();
    body = body.set('userId', this.userId);
    body = body.set('roomId', this.room.id);

    this.roomService
      .addUserInRoom(this.room.id, this.userId, body)
      .toPromise()
      .then((data) => {
        this.isUserInRoom = false;
        this.router.navigateByUrl('/home');
      });
  }

  async addBet(teamId: number, matchId: number) {
    this.betService
      .save(
        new Bet(
          null,
          new Team(teamId, null, null, null, null),
          new Match(
            matchId,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ),
          new User(this.userId, null, null, null, null, null),
          new Room(this.room.id, null, null, null, null, null, null, null)
        )
      )
      .subscribe(
        async (data) => {
          this.router.navigateByUrl('/home', { replaceUrl: true });
        }
      );
  }

  async getRoom(id: number): Promise<Room> {
    return this.roomService.findOne(id).toPromise();
  }

  async getBet() {
    await this.betService.start();
    for (let match of this.matches) {

      this.betService
        .findBetByUserMatchRoom(this.userId, match.id, this.room.id)
        .toPromise()
        .then(
          (data) => {
            if(data){
              this.bets.set(match.id, data);
              this.isBetOnMatch.set(match.id, true);
            }else{
              this.isBetOnMatch.set(match.id, false);
            }
          }
        );
    }
  }
}
