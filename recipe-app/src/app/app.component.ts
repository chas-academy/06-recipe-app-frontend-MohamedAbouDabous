import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public loggedIn: boolean;

  constructor(
    public auth: AuthService,
    private router: Router,
    private token: TokenService
  ) { }
  
  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }
  logout(event: MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.auth.changeStatus(false);
    this.router.navigateByUrl('/login');
  }
  
  

}