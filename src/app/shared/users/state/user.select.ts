import { Selector } from '@ngxs/store';
import { Room } from '../../rooms/models/room';
import { User } from '../models/user';
import { UserState, UserStateModel } from './user.state';

export class UserSelect{
  @Selector([UserState])
  static getUser(state: UserStateModel): User {
    return state.user;
  }
  @Selector([UserState])
  static getRooms(state: UserStateModel): Room[] {
    return state.user.rooms;
  }
}
