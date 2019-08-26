import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { LoginComponent } from './login/login.component';
import { PostLoginService } from './post-login.service';
import { PreLoginService } from './pre-login.service';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [PreLoginService] },
  { path: 'signup', component: SignupComponent, canActivate: [PreLoginService] },
  { path: 'profile', component: ProfileComponent, canActivate: [PostLoginService] },
  { path: '', component: RecipeListComponent },
  { path: 'detail/:id', component: RecipeDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/detail/:id', component: RecipeDetailsComponent },
];

// const routes: Routes = [

//   { path: 'detail/:id', component: RecipeDetailsComponent },
//   { path: '', component: RecipeListComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: SignupComponent, canActivate: [PreLoginService] },
//   { path: 'profile', component: ProfileComponent, canActivate: [PostLoginService] }

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
