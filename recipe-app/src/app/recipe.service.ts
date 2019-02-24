import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl = `https://api.edamam.com/`
  apiId = `879e8817`;
  apiKey = `6d0d66100f4387b7b941759acf7c61fc`;
  searchVar = 'chicken';

  constructor(private http: HttpClient) { }


 getRecipes() {
   return this.http.get<any>(this.baseUrl + 'search?q=' + this.searchVar + '&app_id=' + this.apiId + '&app_key=' + this.apiKey + '&from=0&to=30&health=alcohol-free&')
 }

}
