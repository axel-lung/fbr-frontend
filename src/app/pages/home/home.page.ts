import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  rooms: Room[];
  date: String;
  store: string;

  constructor(private roomService: RoomService, private router: Router, private storage: NativeStorage) {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    this.date = dd + ' / ' + mm + ' / ' + yyyy;




  }

  async ngOnInit() {
    this.getRooms().then(
      data => {
        this.rooms = data;
      }
    ).catch(
      err => {
        console.log(err);

      }
    );
  }

  async getRooms(): Promise<Room[]> {
		return await this.roomService.getAll().toPromise();
	}

  toRoom(id: number){
    this.router.navigateByUrl('/room');
    this.roomService.setRoomId(id);
  }

  getStorage(): void{
    this.storage.getItem('myitem')
    .then(
      data =>this.store = data,
      error => console.error(error)
    );
  }

  setStorage(): void{
    this.storage.setItem('myitem', {property: 'AXEL', anotherProperty: 'anotherValue'})
    .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );
  }


}
