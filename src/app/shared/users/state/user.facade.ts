import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Room } from '../../rooms/models/room';
import { User } from '../models/user';
import { UserSelect } from './user.select';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {
  @Select(UserSelect.getUser)
  user$!: Observable<User>;

  @Select(UserSelect.getRooms)
  userRooms$!: Observable<Room[]>;

  constructor() {}
}

