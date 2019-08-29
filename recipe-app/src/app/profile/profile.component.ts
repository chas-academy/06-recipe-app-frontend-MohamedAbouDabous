import { Component, OnInit } from '@angular/core';
import { UserandtokenService } from './../userandtoken.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  constructor(
    private token: UserandtokenService,
    private service: UserandtokenService,
  ) { }

  collection = [];
  email: any;
  id;

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    let email = this.token.getEmail()
    this.service.getSavedRecipes().subscribe(response => {
      response.data.forEach(e => {
        if (e.email == email) this.collection.push(e)
        console.log(e);
      });
    });
  }

  deleteRecipe(id) {
    let recipe;
    this.collection.forEach(e => {
      if (e.id == id) recipe = e;
    });
    this.service.deleteSavedRecipe(recipe).subscribe(response => {
      this.collection = [];
      response.data.forEach(e => {
        if (e.email == this.email) this.collection.push(e);
      });
      this.getRecipes();
    })
  }

  constructModel(data) {
    let dbModel = {
      id: data.id,
      email: this.token.getEmail(),
      label: data.label
    }

    return dbModel;
  }


}
