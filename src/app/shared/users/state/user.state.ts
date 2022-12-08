import { Injectable } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Action, State, StateContext } from '@ngxs/store';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { GetUser } from './user.action';

export interface UserStateModel {
  user: User;
}

@Injectable()
@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: null,
  },
})
export class UserState {
  constructor(private userService: UserService, private storage: NativeStorage) {}
  @Action(GetUser)
  getUser(ctx: StateContext<UserStateModel>, action: GetUser) {
    const state = ctx.getState();

    return this.userService.findOne(action.id).subscribe((value) => {
      ctx.setState({
        ...state,
        user: value,
      });
    });
  }
  async ngxsOnInit(ctx: StateContext<UserStateModel>) {
    await this.userService.start();
    const userStorage = await this.storage.getItem('USER');
    ctx.dispatch(new GetUser(userStorage.USER_ID));
  }
}
