import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'http://recipe-app.test/api'

  constructor(
    private http: HttpClient,
  ) { }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
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

  sendUpdatedRecipe(data) {
    return this.http.put(`${this.baseUrl}/update-recipe`, data);
  }
}
