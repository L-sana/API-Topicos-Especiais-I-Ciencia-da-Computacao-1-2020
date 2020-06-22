import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Recurso } from './recurso.interface';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  constructor(private http: HttpClient) { }

  getRecurso() : Observable<any>{
    return this.http.get('https://localhost:5002/api/recursos/1/100')
  }

  postRecurso(recurso: Recurso) : Observable<Recurso>
  {
    return this.http.post<Recurso>('https://localhost:5002/api/recursos', recurso);
  }

  deleteRecurso(id : number) : Observable<Recurso>
  {
    return this.http.delete<Recurso>('https://localhost:5002/api/recursos/'+id);
  }

}
