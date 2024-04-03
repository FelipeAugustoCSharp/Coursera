import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { IPaises } from 'src/app/services/templates/IPaises';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{

  Paises: IPaises[] = []

  constructor(private cursosService: CursosService) {
    
  }

  ngOnInit(): void {
      this.cursosService.getCountries().subscribe({
        next:(pais:any) => {
          this.Paises = pais.dados          
        }
      })
  }


}
