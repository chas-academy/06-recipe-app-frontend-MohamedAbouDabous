import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { TokenService } from './token.service';
// import { UserAndToken } from './user-and-token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreLoginService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return !this.token.loggedIn();
  }

  constructor(
    private token: TokenService,
    // private token: UserAndToken
  ) { }
}
