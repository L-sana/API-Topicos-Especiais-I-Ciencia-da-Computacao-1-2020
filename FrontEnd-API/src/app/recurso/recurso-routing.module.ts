import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursoListaComponent } from './recurso-lista/recurso-lista.component';


const routes: Routes = [
  {
    path: '',
    component: RecursoListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursoRoutingModule { }
