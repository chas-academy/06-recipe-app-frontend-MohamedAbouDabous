import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getSavedRecipes(): Observable<any> {
    return this.http.get(`${this.Url}/recipe`);
  }

  sendRecipe(data) {
    return this.http.post(`${this.Url}/save-recipe`, data);
  }

  sendUpdatedRecipe(data) {
    return this.http.put(`${this.Url}/update-recipe`, data);
  }

  deleteSavedRecipe(recipe) {
    return this.http.post<any>(`${this.Url}/delete-recipe`, recipe);
  }
}
