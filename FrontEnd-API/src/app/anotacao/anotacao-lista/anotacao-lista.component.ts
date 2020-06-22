import { Component, OnInit } from '@angular/core';

import { Anotacao } from '../anotacao.interface';
import { Observable } from 'rxjs'
import { AnotacaoService } from '../anotacao.service'

@Component({
  selector: 'app-anotacao-lista',
  templateUrl: './anotacao-lista.component.html',
  styleUrls: ['./anotacao-lista.component.css']
})
export class AnotacaoListaComponent implements OnInit {

  anotacoes : Observable<Anotacao>;

  constructor(private service: AnotacaoService) { }

  ngOnInit(): void {
    this.anotacoes = this.service.getAnotacao();
  }
  apagar(id: number)
  {
    this.service.deleteAnotacao(id).subscribe();
  }

}
