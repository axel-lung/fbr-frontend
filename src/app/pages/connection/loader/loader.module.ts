import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderPageRoutingModule } from './loader-routing.module';

import { LoaderPage } from './loader.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { NgxsModule } from '@ngxs/store';
import { RoomState } from 'src/app/shared/rooms/state/room.state';
import { UserState } from 'src/app/shared/users/state/user.state';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderPageRoutingModule,
    NgxsModule.forFeature([
      RoomState, UserState
    ]),
  ],
  declarations: [LoaderPage]
})
export class LoaderPageModule {}
