import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Perfil } from './perfil.interface';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  getPerfil() : Observable<any>{
    return this.http.get('https://localhost:5002/api/perfis/1/100')
  }

  postPerfil(perfil: Perfil) : Observable<Perfil>
  {
    return this.http.post<Perfil>('https://localhost:5002/api/perfis', perfil);
  }

  deletePerfil(id : number) : Observable<Perfil>
  {
    return this.http.delete<Perfil>('https://localhost:5002/api/perfis/'+id);
  }
}
