import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IUser } from './templates/IUser';
import { Observable, delay, first, take, tap } from 'rxjs';
import { IResponse } from './templates/IResponse';
import { IPaises } from './templates/IPaises';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private readonly Key_Api = `${environment.API_URL_PROD}/UsuarioCadastro`;
  userId!: Pick<IUser, "id">;
  @Output() mostrarMenu = new EventEmitter<boolean>();
  @Output() mostrarMensagem = new EventEmitter<string>();
  constructor(private http: HttpClient, private router: Router) { }

  getPaises(): Observable<IResponse<IPaises[]>> {
    return this.http
    .get<IResponse<IPaises[]>>("../../assets/Country/Paises.json")
    .pipe(
      delay(100),
      take(1) 
    );
  }

  createUser(usuario: Omit<IUser, "id">) : Observable<IResponse<IUser>> {
    return this.http.post<IResponse<IUser>>(`${this.Key_Api}/register`, usuario)
    .pipe(
      tap((E) => console.log("passou o dado:" +E)),
      first()
    );
  }
  login(usuario: Pick<IUser, "email" | "senha">): Observable<IResponse<IUser>> {
    return this.http.post<IResponse<IUser>>(`${this.Key_Api}/login`, usuario)
      .pipe(
        tap((data:any) => {
          try{
            this.userId = data.dados.id
            this.mostrarMensagem.emit(data.mensagem)
            localStorage.setItem("token", data.token);
            this.mostrarMenu.emit(true)
            this.router.navigate(["/home"])
            console.log(data.token);  
          }catch{
            this.mostrarMenu.emit(false)
            console.log("nao passou");
            this.mostrarMensagem.emit(data.mensagem)
          }                 
        }),
        first()
      );
  }

  deslogar() : void{
    this.mostrarMenu.emit(false);
  }

}
