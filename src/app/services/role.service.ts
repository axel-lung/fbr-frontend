import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/role';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends RestService<Role, number> {
  constructor(protected http: HttpClient) {
    super(http, `/api/roles/test`);
  }
}
