import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service'

import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Search for a recipe';
  fontColor = "grey";
  backgroundColor = "blue";
  recipes: string [];

  constructor (
    private recipeService: RecipeService
  ) {}


  getTheFreakingRecipes = (searchTerm) => {
    this.recipeService.getRecipes(searchTerm)
    .subscribe(data => {
      this.recipes = data.hits.map(e => e.recipe)
      console.log(data)
    });
  }
}
