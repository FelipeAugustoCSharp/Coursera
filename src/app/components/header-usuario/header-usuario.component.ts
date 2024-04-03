import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header-usuario',
  templateUrl: './header-usuario.component.html',
  styleUrls: ['./header-usuario.component.scss']
})
export class HeaderUsuarioComponent {
  /**
   *
   */
  constructor(private router: Router, private userService: UsuarioService) {
    
  }

  deslogar(deslogar : boolean) : void{
    localStorage.removeItem("token");
    this.userService.deslogar(); 
    this.router.navigate(["/"]);
  }
}
