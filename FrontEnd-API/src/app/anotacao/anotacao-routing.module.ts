import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotacaoListaComponent } from './anotacao-lista/anotacao-lista.component';


const routes: Routes = [
  {
    path: '',
    component: AnotacaoListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnotacaoRoutingModule { }
