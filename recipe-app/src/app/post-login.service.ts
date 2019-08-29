import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserandtokenService } from '././userandtoken.service';

@Injectable({
  providedIn: 'root'
})
export class PostLoginService implements CanActivate {

  constructor(

    private token: UserandtokenService
    ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.token.loggedIn();
  }

}