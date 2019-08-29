import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://recipe-app.test/api',
    signup: 'http://recipe-app.test/api'
  }

  constructor() { }

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
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
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