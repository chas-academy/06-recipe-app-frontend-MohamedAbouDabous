import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserandtokenService } from './userandtoken.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private token: UserandtokenService
  ) { }
  
  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn())
  authStatus = this.loggedIn.asObservable();
  
  changeStatus(value: boolean) {
    this.loggedIn.next(value);
  }
  
}