import { Component, OnInit } from '@angular/core';
import { UserandtokenService } from './../userandtoken.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  constructor(
    private service: UserandtokenService,
    private token: UserandtokenService,
    private router: Router,
    private auth: AuthService,
  ) { }

  public form = {
    email: null,
    name: null,
    password: null,
  }

  ngOnInit() {
  }

  
  onSubmit() {
    this.service.signup(this.form).subscribe(
      data => this.handleResponse(data)
      )
    }
    
    handleResponse(data) {
      this.token.handle(data.access_token, data.user.email);
      this.auth.changeStatus(true);
      this.router.navigateByUrl('/profile');
    }
}