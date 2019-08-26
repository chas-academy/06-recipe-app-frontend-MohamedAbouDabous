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
    private auth: AuthService,
    private router: Router,
    private token: TokenService
  ) { }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.auth.changeStatus(false);
    this.token.remove();
    this.router.navigateByUrl('/login');
  }
  
  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }


}