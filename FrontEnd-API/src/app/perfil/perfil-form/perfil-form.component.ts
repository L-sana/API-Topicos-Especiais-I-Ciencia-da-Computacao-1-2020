import { Component, OnInit } from '@angular/core';
import { Perfil } from '../perfil.interface';
import { PerfilService } from '../perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent implements OnInit {

  perfil: Perfil =
  {
    id: Math.floor(100000000*Math.random()),
    descricao: ''
  }

  constructor(private service:PerfilService, private router: Router) { }

  ngOnInit(): void {
  }

  salvar(perfil: Perfil): void{
    this.service.postPerfil(perfil).subscribe(
      data=>{
        this.router.navigate(['/perfil'])
      },
      error=>
      {

      }
    );
  }

}
