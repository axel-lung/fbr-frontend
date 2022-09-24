import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Storage } from '@capacitor/storage';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const TOKEN_KEY = 'secret';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // Init with null to filter out the first value in a guard!
  accessToken: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  refresh_token: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  jwtHelperService: JwtHelperService;

  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private router: Router
  ) {
    this.jwtHelperService = new JwtHelperService();
    this.loadToken();
  }

  async loadToken() {
    const token = await this.getAccessToken();
    console.log("accessToken "+token);

    this.accessToken.next(token);
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    let body = new HttpParams();
    body = body.set('username', credentials.username);
    body = body.set('password', credentials.password);

    return this.http.post(environment.apiUrl + `api/login`, body).pipe(
      map((data: any) => {

        this.refresh_token.next(data.refresh_token);
        this.storage
          .setItem('TOKENS', {
            ACCESS_TOKEN: data.access_token,
            REFRESH_TOKEN: data.refresh_token,
          })
          .then(
            (success) => {
              this.accessToken.next(data.access_token);

            }
          ).finally(
            () => {
              this.router.navigateByUrl('/home');
            }
          );
      })
    );
  }

  refreshToken(token: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.http
      .post(environment.apiUrl + `api/token/refresh`, null, httpOptions)
      .pipe(
        map((data: any) => {
          this.storage.setItem('USER', { USER_ID: data.id });
        })
      );
  }

  logout(): Promise<void> {
    return Storage.remove({ key: TOKEN_KEY });
  }

  setStorage(token: string, refreshToken: string): void {
    this.storage
      .setItem('TOKENS', { ACCESS_TOKEN: token, REFRESH_TOKEN: refreshToken })
      .then();
  }

  async getAccessToken(): Promise<string> {
    try {
      const data = await this.storage.getItem('TOKENS');
      return data.ACCESS_TOKEN;
    } catch {
      this.setStorage('', '');
    }
  }
}
