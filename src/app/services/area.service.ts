import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Area } from '../models/area';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AreaService extends RestService<Area, number> {
  constructor(protected http: HttpClient) {
    super(http, `api/area/save`)
   }
}
