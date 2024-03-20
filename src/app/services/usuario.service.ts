import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IUser } from './templates/IUser';
import { Observable, delay, first, take, tap } from 'rxjs';
import { IResponse } from './templates/IResponse';
import { IPaises } from './templates/IPaises';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private readonly Key_Api = `${environment.API_URL_PROD}/UsuarioCadastro`;
  usuario: string = "/login ou /register"
  userId!: Pick<IUser, "id">;
  constructor(private http: HttpClient) { }

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
          this.userId = data.dados.id
          
          localStorage.setItem("token", data.token);
              
          console.log(data.token);   
        }),
        first()
      );
  }

}
