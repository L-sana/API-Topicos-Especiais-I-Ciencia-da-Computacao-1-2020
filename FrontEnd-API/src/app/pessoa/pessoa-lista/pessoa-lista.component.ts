import { Component, OnInit } from '@angular/core';

import { Pessoa } from '../pessoa.interface';
import { Observable } from 'rxjs'
import { PessoaService } from '../pessoa.service'

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})

export class PessoaListaComponent implements OnInit {

  pessoas : Observable<Pessoa>;

  constructor(private service: PessoaService) { }

  ngOnInit(): void {
    this.pessoas = this.service.getPessoa();
  }

  apagar(id: number)
  {
    this.service.deletePessoa(id).subscribe();
  }

}
