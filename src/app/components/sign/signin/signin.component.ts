import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/services/templates/IUser';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{

  /**
   *
   */
  constructor(
    private userService: UsuarioService,
    private router: Router) {
    
  }
  mensagem: string = '';
  ngOnInit(): void {
      
  }
  usuario:IUser = { email: '', senha: '' };
  receberDados(formulario: FormGroup): void {
    this.usuario.email = formulario.controls["email"].value
    this.usuario.senha = formulario.controls["senha"].value

    console.log(this.usuario);
    
    this.userService.login(this.usuario).subscribe({
      next:(v:any) => {
        console.log(v)
      },
      error:(e:any) => console.log("erro: "+ e)
    }) 
    this.userService.mostrarMensagem.subscribe(
      mensagem => this.mensagem = mensagem
    );
  }

  rotas() : void {
    console.log("passou");    
    this.router.navigate(["/signup"])
  }

}
