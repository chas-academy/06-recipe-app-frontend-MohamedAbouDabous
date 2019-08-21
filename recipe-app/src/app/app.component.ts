import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service'


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
    
  ) {}


  ngOnInit(){
    
  }
  
}
