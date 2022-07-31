import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestService<User, number> {
  constructor(protected http: HttpClient) {
    super(http, `api/user/save`);
  }

}
