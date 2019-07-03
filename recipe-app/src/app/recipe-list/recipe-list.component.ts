import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  
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
    });
  }

  ngOnInit() {
  }

}
