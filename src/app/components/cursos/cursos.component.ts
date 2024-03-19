import { Component, OnInit } from '@angular/core';
import { IPaises } from 'src/app/services/templates/IPaises';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{

  Paises: IPaises[] = []
  /**
   *
   */
  constructor(private userService: UsuarioService) {
    
  }

  ngOnInit(): void {
      this.userService.getPaises().subscribe({
        next:(pais) => {
          this.Paises = pais.dados
          console.log(this.Paises);
          
        }
      })
  }


}
