import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/services/templates/IUser';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  /**
   *
   */
  mensagem: string = '';
  constructor(
    private userService: UsuarioService,
    private router: Router) {
    
  }

  rotas() : void {
    this.router.navigate(["/signin"])
  }

  
  usuario:IUser = { email: '', senha: '' };
  receberDados(formulario: FormGroup) : void {
    this.usuario.email = formulario.controls["email"].value
    this.usuario.senha = formulario.controls["senha"].value

    this.userService.createUser(this.usuario).subscribe({
      next:(v) => console.log(v),
      error:(e) => console.log("erro: "+ e)
            
    })

    this.userService.mostrarMensagem.subscribe(
      mensagem => this.mensagem = mensagem
    );
  }
}
