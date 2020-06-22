import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../grupo.service';
import { Router } from '@angular/router';
import { Grupo } from '../grupo.interface';

@Component({
  selector: 'app-grupo-form',
  templateUrl: './grupo-form.component.html',
  styleUrls: ['./grupo-form.component.css']
})
export class GrupoFormComponent implements OnInit {

  grupo: Grupo =
  {
    id: Math.floor(100000000*Math.random()),
    nome: ''
  }

  constructor(private service:GrupoService, private router: Router) { }

  ngOnInit(): void {
  }

  salvar(grupo: Grupo): void{
    this.service.postGrupo(grupo).subscribe(
      data=>{
        this.router.navigate(['/grupo'])
      },
      error=>
      {

      }
    );
  }

}
