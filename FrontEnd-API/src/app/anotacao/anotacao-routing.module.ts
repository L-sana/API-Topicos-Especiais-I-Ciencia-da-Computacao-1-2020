import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotacaoListaComponent } from './anotacao-lista/anotacao-lista.component';
import { AnotacaoFormComponent } from './anotacao-form/anotacao-form.component';


const routes: Routes = [
  {
    path: '',
    component: AnotacaoListaComponent
  },
  {
    path: 'form',
    component: AnotacaoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnotacaoRoutingModule { }
