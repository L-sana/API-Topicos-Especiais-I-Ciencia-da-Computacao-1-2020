import { Component, OnInit } from '@angular/core';

import { Recurso } from '../recurso.interface';
import { Observable } from 'rxjs'
import { RecursoService } from '../recurso.service'

@Component({
  selector: 'app-recurso-lista',
  templateUrl: './recurso-lista.component.html',
  styleUrls: ['./recurso-lista.component.css']
})
export class RecursoListaComponent implements OnInit {

  recursos : Observable<Recurso>;

  constructor(private service: RecursoService) { }

  ngOnInit(): void {
    this.recursos = this.service.getRecurso();
  }

  apagar(id: number)
  {
    this.service.deleteRecurso(id).subscribe();
  }

}
