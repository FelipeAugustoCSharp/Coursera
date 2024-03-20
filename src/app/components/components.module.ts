import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CardCourseComponent } from './templates/card-course/card-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/cursos.component';
import { SigninComponent } from './sign/signin/signin.component';
import { SignupComponent } from './sign/signup/signup.component';
import { FormSignComponent } from './templates/form-sign/form-sign.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './templates/header/header.component';
import { AlunoAreaComponent } from './aluno-area/aluno-area.component';



@NgModule({
  declarations: [
    InicioComponent,
    CardCourseComponent,
    CursosComponent,
    SigninComponent,
    SignupComponent,
    FormSignComponent,  
    AlunoAreaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
