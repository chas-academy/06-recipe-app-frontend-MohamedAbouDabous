import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: RecipeService,
  ) { }
  
  backToHomePage() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.service.getOneRecipe(this.route.snapshot.params['id']).subscribe(data => {
      this.recipe = data.hits.map(hit => hit.recipe)
      console.log(this.recipe)
    });
  }


}
