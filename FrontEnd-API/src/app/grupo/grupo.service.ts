import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Grupo } from './grupo.interface';


@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) { }

  getGrupo() : Observable<any>{
    return this.http.get('https://localhost:5002/api/grupos/1/100')
  }

  postGrupo(grupo: Grupo) : Observable<Grupo>
  {
    return this.http.post<Grupo>('https://localhost:5002/api/grupos', grupo);
  }

  deleteGrupo(id : number) : Observable<Grupo>
  {
    return this.http.delete<Grupo>('https://localhost:5002/api/grupos/'+id);
  }
}
