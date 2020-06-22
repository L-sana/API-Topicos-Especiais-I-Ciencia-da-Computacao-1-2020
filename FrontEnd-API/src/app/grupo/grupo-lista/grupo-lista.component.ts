import { Component, OnInit } from '@angular/core';

import { Grupo } from '../grupo.interface';
import { Observable } from 'rxjs'
import { GrupoService } from '../grupo.service'

@Component({
  selector: 'app-grupo-lista',
  templateUrl: './grupo-lista.component.html',
  styleUrls: ['./grupo-lista.component.css']
})
export class GrupoListaComponent implements OnInit {

  grupos : Observable<Grupo>;

  constructor(private service: GrupoService) { }

  ngOnInit(): void {
    this.grupos = this.service.getGrupo();
  }

  apagar(id: number)
  {
    this.service.deleteGrupo(id).subscribe();
  }

}
