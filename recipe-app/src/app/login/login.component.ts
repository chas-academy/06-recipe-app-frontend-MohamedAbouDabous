import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: UsersService,
    private token: TokenService,
    private router: Router,
    private auth: AuthService,
  ) { }

  public form = {
    email: null,
    password: null
  }

  public error = null;

  onSubmit() {
    this.service.login(this.form).subscribe(
      data => this.handleResponse(data)
    )
  }

  handleResponse(data) {
    this.token.handle(data.access_token, data.user.email);
    this.auth.changeStatus(true);
    this.router.navigateByUrl('/profile');
  }

  ngOnInit() {
  }

}