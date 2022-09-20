import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;
let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
  }),
};
export abstract class RestService<T, ID> {
  token: string = '';
  storage: NativeStorage;
  constructor(protected _http: HttpClient, protected _base: string) {}

  async start() {
    this.storage = new NativeStorage();
    await this.getStorage();
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.token);
  }

  save(t: T): Observable<T> {
    console.log("url "+API_URL + this._base);
    console.log("t "+ t.valueOf());
    console.log("httpoptions "+ httpOptions.headers);


    return this._http.post<T>(API_URL + this._base, t, httpOptions);
  }

  update(id: ID, t: T): Observable<T> {
    return this._http.put<T>(API_URL + this._base + '/' + id, t, httpOptions);
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(API_URL + this._base + '/' + id, httpOptions);
  }

  getAll(): Observable<T[]> {
    return this._http.get<T[]>(API_URL + this._base + 's', httpOptions);
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(API_URL + this._base + '/' + id, httpOptions);
  }

  async getStorage(): Promise<any> {
    await this.storage.getItem('tokens').then(
      (data) => (this.token = data.access_token),
      (error) => console.error(error)
    );
  }

  getAPI_URL(){
    return API_URL;
  }

  getHttpOptions(){
    return httpOptions;
  }



}
