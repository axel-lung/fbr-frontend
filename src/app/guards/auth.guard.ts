import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router) { }

  canLoad(): Observable<boolean> {

    return this.authService.accessToken.pipe(
      filter(val => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map(accessToken => {
        console.log("aT"+accessToken);

        console.log("return "+ !this.authService.jwtHelperService.isTokenExpired(accessToken));
        if (!this.authService.jwtHelperService.isTokenExpired(accessToken)) {


          return true;
        } else {
          this.router.navigateByUrl('/login')
          return false;
        }
      })
    );
  }
}
