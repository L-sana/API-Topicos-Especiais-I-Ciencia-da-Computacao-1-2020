import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  getPessoa() : Observable<any>{
    return this.http.get('https://localhost:5002/api/pessoas/1/100')
  }
}
