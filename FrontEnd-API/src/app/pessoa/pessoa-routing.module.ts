import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';


const routes: Routes = [
  {
    path: '',
    component: PessoaListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
