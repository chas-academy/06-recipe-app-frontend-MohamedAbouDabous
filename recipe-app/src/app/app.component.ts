import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service'
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recipe-app';
  
  constructor (
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.recipeService.getRecipes()
    .subscribe(data => {
      console.log(data)
    });
  }


  getTheFreakingRecipes = () => {
    this.recipeService.getRecipes()
    .subscribe(data => {
      console.log(data)
    });
  }
}
