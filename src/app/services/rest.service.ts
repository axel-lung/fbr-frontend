import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export abstract class RestService<T,ID> {
  constructor(protected _http: HttpClient, protected _base: string) {}

  save(t: T): Observable<T> {
    return this._http.post<T>(API_URL + this._base, t, httpOptions);
  }

  update(id: ID, t: T): Observable<T> {
    return this._http.put<T>(API_URL + this._base + "/" + id, t, httpOptions);
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(API_URL + this._base + "/" + id);
  }

  getAll(): Observable<T[]> {
    return this._http.get<T[]>(API_URL + this._base + "s", httpOptions)
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(API_URL + this._base + '/' + id);
  }

}
