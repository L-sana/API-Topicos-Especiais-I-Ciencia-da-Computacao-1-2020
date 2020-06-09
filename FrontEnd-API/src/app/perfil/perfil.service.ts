import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  getPerfil() : Observable<any>{
    return this.http.get('https://localhost:5002/api/perfis/1/100')
  }
}
