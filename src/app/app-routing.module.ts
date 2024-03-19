import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { SigninComponent } from './components/sign/signin/signin.component';
import { SignupComponent } from './components/sign/signup/signup.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"cursos", component: CursosComponent},
  {path:"signin", component: SigninComponent},
  {path:"signup", component: SignupComponent},
  {path:"**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
