import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Anotacao } from './anotacao.interface';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {

  constructor(private http: HttpClient) { }

  getAnotacao() : Observable<any>{
    return this.http.get('https://localhost:5002/api/anotacoes/1/100')
  }

  postAnotacao(anotacao: Anotacao) : Observable<Anotacao>
  {
    return this.http.post<Anotacao>('https://localhost:5002/api/anotacoes', anotacao);
  }

  deleteAnotacao(id : number) : Observable<Anotacao>
  {
    return this.http.delete<Anotacao>('https://localhost:5002/api/anotacoes/'+id);
  }
}
