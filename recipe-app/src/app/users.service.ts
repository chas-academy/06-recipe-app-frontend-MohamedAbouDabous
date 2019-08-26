import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  Url = 'http://recipe.test/api'

  constructor(
    private http: HttpClient,
  ) { }

  login(data) {
    return this.http.post(`${this.Url}/login`, data)
  }

  signup(data) {
    return this.http.post(`${this.Url}/signup`, data)
  }
}