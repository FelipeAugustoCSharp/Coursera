import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { SigninComponent } from './components/sign/signin/signin.component';
import { SignupComponent } from './components/sign/signup/signup.component';
import { UsuarioService } from './services/usuario.service';
import { AlunoAreaComponent } from './components/aluno-area/aluno-area.component';

const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"inicio", component: InicioComponent},
  {path:"cursos", component: CursosComponent},
  {path:"signin", component: SigninComponent},
  {path:"signup", component: SignupComponent},

  {path:"home", component:AlunoAreaComponent},
  {path:"**", component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
