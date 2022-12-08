import { Selector } from '@ngxs/store';
import { Room } from '../models/room';
import { RoomState, RoomStateModel } from './room.state';

export class RoomSelect{
  @Selector([RoomState])
  static getCreatedRooms(state: RoomStateModel): Room[] {
    return state.rooms.filter(s => s.status === 'CREATED');
  }
  @Selector([RoomState])
  static getPlayingRooms(state: RoomStateModel): Room[] {
    return state.rooms.filter(s => s.status === 'PLAYING');
  }
  @Selector([RoomState])
  static getFinishedRooms(state: RoomStateModel): Room[] {
    return state.rooms.filter(s => s.status === 'FINISHED');
  }
}
