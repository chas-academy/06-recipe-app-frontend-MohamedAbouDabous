import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserandtokenService } from '././userandtoken.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreLoginService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return !this.token.loggedIn();
  }

  constructor(
    private token: UserandtokenService
  ) { }
}
