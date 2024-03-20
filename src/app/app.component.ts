import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cursera';

  mostrar: boolean = false;
  /**
   *
   */
  constructor(private userService: UsuarioService) {
    
  }
  ngOnInit(): void {
      this.userService.mostrarMenu.subscribe({
        next:(result: boolean) => {
          console.log(result);
          this.mostrar = result
        },
        error:(err:any) => console.log(err)
        
      })
  }
}
