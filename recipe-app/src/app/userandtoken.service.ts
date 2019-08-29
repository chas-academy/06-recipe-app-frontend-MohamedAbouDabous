import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserandtokenService {

  private loginRegister = {
    login: 'http://recipe-app.test/api/login',
    register: 'http://recipe-app.test/api/register'
  }

  baseUrl = 'http://recipe-app.test/api'

  constructor(
    private http: HttpClient,
  ) { }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  register(data) {
    return this.http.post(`${this.baseUrl}/register`, data)
  }

  getSavedRecipes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipe`);
  }

  deleteSavedRecipe(recipe) {
    return this.http.post<any>(`${this.baseUrl}/delete-recipe`, recipe);
  }
  
  sendRecipe(data) {
    return this.http.post(`${this.baseUrl}/save-recipe`, data);
  }


  handle(token, email) {
    this.set(token);
    this.setEmail(email);
  }

  setEmail(email) {
    localStorage.setItem('email', email);
  }

  getEmail() {
    return localStorage.getItem('email');
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get()
    if (token) {
      const payload = this.payload(token)
      if (payload) {
        return Object.values(this.loginRegister).indexOf(payload.loginRegister) > -1 ? true : false;
      }
    }

    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

}
