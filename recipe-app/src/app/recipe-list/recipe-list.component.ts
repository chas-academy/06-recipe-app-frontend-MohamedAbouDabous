import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  
  searchTerm;
  healthLabel = '';
  recipes: any

  constructor (
    private recipeService: RecipeService
  ) {}

  
  getTheFreakingRecipes = () => {
    this.recipeService.getAllRecipes(this.searchTerm, this.healthLabel)
    .subscribe(data => {
      this.recipes = data.hits.map(e => e.recipe)
    });
  }
  
  ngOnInit() {
    this.getTheFreakingRecipes();
  }

}
