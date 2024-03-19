import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaises } from 'src/app/services/templates/IPaises';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  constructor(private userService:UsuarioService) {
    
  }
  Paises!: IPaises[];

  ngOnInit(): void {
    this.obterPaises();
  }

  obterPaises() {
    this.userService.getPaises().subscribe({
      next: (pais: any) => {    
        
        this.Paises = pais.dados.filter((x: any) => x.id <= 4);         
        
        console.log(this.Paises);     
        
      },
      error: (err: any) => {
        console.log('Erro:', err);
      }
    });
  }

}
