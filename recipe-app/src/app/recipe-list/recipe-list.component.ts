import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  
  searchTerm;
  search;
  healthLabel = ''
  dietLabel;
  recipes: any

  constructor (
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
  }

  getTheFreakingRecipes = () => {
    this.recipeService.getAllRecipes(this.searchTerm, this.healthLabel)
    .subscribe(data => {
      this.recipes = data.hits.map(e => e.recipe)
      console.log(this.recipes)
    });
  }


}
