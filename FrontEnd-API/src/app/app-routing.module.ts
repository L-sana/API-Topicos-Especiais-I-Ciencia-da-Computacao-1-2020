import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path:'pessoas',
    loadChildren:() => import('./pessoa/pessoa.module').then(p=>p.PessoaModule)
  },
  {
    path:'recursos',
    loadChildren:() => import('./recurso/recurso.module').then(p=>p.RecursoModule)
  },
  {
    path:'perfil',
    loadChildren:() => import('./perfil/perfil.module').then(p=>p.PerfilModule)
  },
  {
    path:'grupo',
    loadChildren:() => import('./grupo/grupo.module').then(p=>p.GrupoModule)
  },
  {
    path:'anotacao',
    loadChildren:() => import('./anotacao/anotacao.module').then(p=>p.AnotacaoModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
