import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Room } from '../models/room';
import { RoomService } from '../services/room.service';
import { GetRooms } from './room.action';

export interface RoomStateModel {
  rooms: Room[];
}

@Injectable()
@State<RoomStateModel>({
  name: 'rooms',
  defaults: {
    rooms: [],
  },
})
export class RoomState {
  constructor(private roomService: RoomService) {}

  @Action(GetRooms)
  getRooms(ctx: StateContext<RoomStateModel>) {
    const state = ctx.getState();

    return this.roomService.getAll().subscribe((values) => {
      ctx.setState({
        ...state,
        rooms: values,
      });
    });
  }
  async ngxsOnInit(ctx: StateContext<RoomStateModel>) {
    await this.roomService.start();
    ctx.dispatch(new GetRooms());
  }
}
