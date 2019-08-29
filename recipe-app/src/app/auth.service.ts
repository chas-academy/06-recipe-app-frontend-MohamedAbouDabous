// import { UserAndToken } from './user-and-token';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    // private token: UserAndToken
    private token: TokenService,
  ) { }
  
  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn())
  authStatus = this.loggedIn.asObservable();
  
  changeStatus(value: boolean) {
    this.loggedIn.next(value);
  }
  
}