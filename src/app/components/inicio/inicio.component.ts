import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { IPaises } from 'src/app/services/templates/IPaises';

@Component({
  selector: 'app-home',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{
  
  constructor(private cursosService:CursosService) {
    
  }
  Paises!: IPaises[];

  ngOnInit(): void {
    this.obterPaises();
  }

  obterPaises() {
    this.cursosService.getCountries().subscribe({
      next: (pais: any) => {            
        this.Paises = pais.dados.slice(0, 4);                 
      },
      error: (err: any) => {
        console.log('Erro:', err);
      }
    });
  }

}
