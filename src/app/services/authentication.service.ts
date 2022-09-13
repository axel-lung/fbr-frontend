import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Storage } from '@capacitor/storage';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';


const TOKEN_KEY = 'secret';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Init with null to filter out the first value in a guard!
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  refresh_token: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  token = '';

  constructor(private http: HttpClient, private storage: NativeStorage) {
    this.loadToken();
  }

  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    if (token && token.value) {
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  login(credentials: {username, password}): Observable<any> {
    let body = new HttpParams();
    body = body.set("username", credentials.username);
    body = body.set("password", credentials.password);

    return this.http.post(environment.apiUrl+`api/login`, body).pipe(
      map((data: any) => {
        this.refresh_token.next(data.refresh_token);
        this.setStorage(data.access_token, data.refresh_token);
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  refreshToken(token: string): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer "+token
      }),
    };

    return this.http.post(environment.apiUrl+`api/token/refresh`, null, httpOptions).pipe(
      map((data: any) => {
        this.storage.setItem('userid', {userId: data.id});
      })
    )
  }

  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    return Storage.remove({key: TOKEN_KEY});
  }

  setStorage(token: string, refreshToken: string): void{
    this.storage.setItem('tokens', {access_token: token, refresh_token: refreshToken})
    .then();
  }
}
