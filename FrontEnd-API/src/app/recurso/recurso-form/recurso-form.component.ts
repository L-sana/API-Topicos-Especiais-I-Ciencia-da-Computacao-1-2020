import { Component, OnInit } from '@angular/core';
import { Recurso } from '../recurso.interface';
import { RecursoService } from '../recurso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recurso-form',
  templateUrl: './recurso-form.component.html',
  styleUrls: ['./recurso-form.component.css']
})
export class RecursoFormComponent implements OnInit {

  recurso : Recurso =
  {
    id: Math.floor(100000000*Math.random()),
    descricao: ''
  }

  constructor(private service:RecursoService, private router: Router) { }

  ngOnInit(): void {
  }

  salvar(recurso: Recurso): void{
    this.service.postRecurso(recurso).subscribe(
      data=>{
        this.router.navigate(['/recursos'])
      },
      error=>
      {

      }
    );
  }

}
