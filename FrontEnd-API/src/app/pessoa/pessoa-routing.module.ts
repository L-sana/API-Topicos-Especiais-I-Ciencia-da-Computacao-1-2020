import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';


const routes: Routes = [
  {
    path: '',
    component: PessoaListaComponent
  },
  {
    path: 'form',
    component: PessoaFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
