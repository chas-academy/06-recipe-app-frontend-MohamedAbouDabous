import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { UserandtokenService } from './../userandtoken.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any
  clicked = false;
  
  constructor(
    private token: UserandtokenService,
    private router: Router,
    private route: ActivatedRoute,
    private service: RecipeService,
    private userService: UserandtokenService
  ) { }

  ngOnInit() {
    this.service.getOneRecipe(this.route.snapshot.params['id']).subscribe(data => {
      this.recipe = data.hits.map(hit => hit.recipe)
    });
  }

  backToRecipes() {
    this.router.navigate(['']);
  }

  saveRecipe() {
    console.log('saved')
    this.clicked = false;
    let dbModel = this.constructModel(this.recipe[0])
    this.userService.sendRecipe(dbModel).subscribe(data => {
    })
  }


  arrayToString(array) {
    let string = "";
    array.forEach(e => {
      string = string + e + ",";
    });
    return string;
  }

  constructModel(recipe) {
    let dbModel = {

      email: this.token.getEmail(),

      label: recipe.label,
      image: recipe.image,
      calories: recipe.calories.toString(),
      healthLabels: this.arrayToString(recipe.healthLabels),
      ingredientLines: this.arrayToString(recipe.ingredientLines),
    }

    return dbModel;
  }

}