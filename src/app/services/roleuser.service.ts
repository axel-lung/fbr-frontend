import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoleUser } from '../models/role_user';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class RoleUserService extends RestService<RoleUser, number> {
  constructor(protected http: HttpClient) {
    super(http, `api/user/save`);
  }

}
