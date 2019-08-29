import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiKey = `6d0d66100f4387b7b941759acf7c61fc`;
  apiId = `879e8817`;
  healthLabel: string;

  constructor(private http: HttpClient) { }


 getAllRecipes(theEndResult, healthLabel): Observable<any> {
   return this.http.get<any>('https://api.edamam.com/search?q=' + theEndResult + '&app_id=' + this.apiId + '&app_key=' + this.apiKey + `&from=0&to=30${healthLabel}`)
  }

 getOneRecipe(id): Observable<any> {

  return this.http.get('https://api.edamam.com/search?q=' + id + '&app_id=' + this.apiId + '&app_key=' + this.apiKey + '&from=0&to=1')
}

}
