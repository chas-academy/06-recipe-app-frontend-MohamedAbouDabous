import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  healthLabel: string;
  theEndResult: string;
  Url = `https://api.edamam.com/`
  apiKey = `6d0d66100f4387b7b941759acf7c61fc`;
  apiId = `879e8817`;
  

  constructor(private http: HttpClient) { }


 getAllRecipes(theEndResult: string, healthLabel ) {
   return this.http.get<any>(this.Url + 'search?q=' + theEndResult + '&app_id=' + this.apiId + '&app_key=' + this.apiKey + '&from=0&to=30&health=alcohol-free&')
 }

 getOneRecipe(id): Observable<any> {

  return this.http.get(this.Url + 'search?q=' + id + '&app_id=' + this.apiId + '&app_key=' + this.apiKey + '&from=0&to=1')
}

getSavedRecipes() {
  return;
}

}
