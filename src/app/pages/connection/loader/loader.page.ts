import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { empty, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { RestService } from 'src/app/shared/rest.service';
import { Room } from 'src/app/shared/rooms/models/room';
import { RoomService } from 'src/app/shared/rooms/services/room.service';
import { RoomFacadeService } from 'src/app/shared/rooms/state/room.facade';
import { RoomSelect } from 'src/app/shared/rooms/state/room.select';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {
  public progress = 0;
  public loadingCount = 0;
  constructor(
    private router: Router
    ) {}

  ngOnInit() {


    setTimeout(() => {
      setTimeout(() => {
        this.router.navigateByUrl('/home', { replaceUrl: true });
      }, 5000);

      setInterval(() => {
        this.progress += 0.01;
        if(this.loadingCount < 100) {
          this.loadingCount += 1;
        }

      }, 50);
    }, 1500);
  }

}
