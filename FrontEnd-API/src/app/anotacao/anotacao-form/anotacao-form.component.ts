import { Component, OnInit } from '@angular/core';
import { Anotacao } from '../anotacao.interface';
import { AnotacaoService } from '../anotacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anotacao-form',
  templateUrl: './anotacao-form.component.html',
  styleUrls: ['./anotacao-form.component.css']
})
export class AnotacaoFormComponent implements OnInit {

  anotacao: Anotacao =
  {
    id: Math.floor(100000000*Math.random()),
    data: 0,
    obs: '',
    id_pessoa_grupo: 1
  }

  constructor(private service:AnotacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  salvar(anotacao: Anotacao): void{
    this.service.postAnotacao(anotacao).subscribe(
      data=>{
        this.router.navigate(['/anotacao'])
      },
      error=>
      {

      }
    );
  }
}
