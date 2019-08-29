import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { LoginComponent } from './login/login.component';
import { PreLoginService } from './pre-login.service';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'recipes-list', pathMatch: 'full'},
  { path: 'recipes-list', component: RecipeListComponent },
  { path: 'recipes-list/detail/:id', component: RecipeDetailsComponent },
  { path: 'login', component: LoginComponent, canActivate: [PreLoginService] },
  { path: 'register', component: RegisterComponent, canActivate: [PreLoginService] },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/detail/:id', component: RecipeDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
