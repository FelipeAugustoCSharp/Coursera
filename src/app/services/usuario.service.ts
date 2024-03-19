import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IUser } from './templates/IUser';
import { Observable, delay, elementAt, first, of, switchMap, take, tap } from 'rxjs';
import { IResponse } from './templates/IResponse';
import { IPaises } from './templates/IPaises';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private readonly Key_Api = `${environment.API_URL_PROD}/UsuarioCadastro`;
  usuario: string = "/login ou /register"

  constructor(private http: HttpClient) { }

  getPaises(): Observable<IResponse<IPaises[]>> {
    return this.http
    .get<IResponse<IPaises[]>>("../../assets/Country/Paises.json")
    .pipe(
      delay(100),
      take(1) 
    );
  }

  // login(usuario: Omit<IUser, "id">): Observable<Response<IUser>> {
  //   return this.http.post<Response<IUser>>(`${this.Key_Api}/login`, usuario)
  //     .pipe(first());
  // }

}
