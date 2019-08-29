import { UserandtokenService } from './../userandtoken.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private token: UserandtokenService,
    private service: UserandtokenService,
    private router: Router,
    private auth: AuthService,
  ) { }

  public form = {
    email: null,
    password: null
  }


  onSubmit() {
    this.service.login(this.form).subscribe(
      data => this.handleResponse(data)
    )
  }

  handleResponse(data) {
    this.token.handle(data.access_token, data.user.email);
    this.auth.changeStatus(true);
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}