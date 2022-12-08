import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from '../../rest.service';
import { RoleUser } from '../models/role_user';

@Injectable({
  providedIn: 'root'
})
export class RoleUserService extends RestService<RoleUser, number> {
  constructor(protected http: HttpClient) {
    super(http, `api/user/save`);
  }

}
