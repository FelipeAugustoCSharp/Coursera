import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { Observable, delay, take } from 'rxjs';
import { IResponse } from './templates/IResponse';
import { IPaises } from './templates/IPaises';
@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly Key_Api = `${environment.API_URL_PROD}/Cursos`;

  constructor(private http: HttpClient, private router: Router) { }

  getCountries(): Observable<IResponse<IPaises[]>> {
    return this.http.get<IResponse<IPaises[]>>(`${this.Key_Api}/banner`)
      .pipe(
        take(1) 
      );
}
}
