import { AuthService } from '../auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserandtokenService } from '../userandtoken.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  public loggedIn: boolean;

  constructor(
    public auth: AuthService,
    private router: Router,
    private token: UserandtokenService
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
