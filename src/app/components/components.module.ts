import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CardCourseComponent } from './templates/card-course/card-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/cursos.component';
import { SigninComponent } from './sign/signin/signin.component';
import { SignupComponent } from './sign/signup/signup.component';
import { FormSignComponent } from './templates/form-sign/form-sign.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardCourseComponent,
    CursosComponent,
    SigninComponent,
    SignupComponent,
    FormSignComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
