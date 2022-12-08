import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Observable } from 'rxjs';
import { Room } from 'src/app/shared/rooms/models/room';
import { User } from 'src/app/shared/users/models/user';
import { RoomService } from 'src/app/shared/rooms/services/room.service';
import { UserService } from 'src/app/shared/users/services/user.service';
import { RoomFacadeService } from 'src/app/shared/rooms/state/room.facade';
import { AlertController } from '@ionic/angular';
import { Select } from '@ngxs/store';
import { UserFacadeService } from 'src/app/shared/users/state/user.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  date: Date;
  accessToken: string;

  constructor(
    private roomService: RoomService,
    private router: Router,
    public userFacade: UserFacadeService,
    private storage: NativeStorage,
    public roomFacade: RoomFacadeService,
    private alertController: AlertController
  ) {}

  async ngOnInit() {
    this.date = new Date();
    // const userStorage = await this.storage.getItem('USER');
    // this.user$ = this.userService.findOne(userStorage.USER_ID);
    // this.rooms$ = this.roomService.getAll();
  }

  findRoom() {
    this.roomFacade.createdRooms$.subscribe((rooms) => {
      if (rooms.length === 0) {
        this.noRoom();
      } else {
        const random = Math.floor(Math.random() * rooms.length);
        this.userFacade.user$.subscribe((value) => {
          value.rooms.forEach((userRoom) => {
            if (userRoom.id === rooms[random].id) {
              this.noRoom();
            } else {
              this.roomFacade.toRoom(rooms[random].id);
            }
          });
        });
      }
    });
  }

  async noRoom() {
    const alert = await this.alertController.create({
      header: 'Aucune partie trouvée',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Ok',
          cssClass: '',
        },
      ],
    });

    await alert.present();
  }
}
