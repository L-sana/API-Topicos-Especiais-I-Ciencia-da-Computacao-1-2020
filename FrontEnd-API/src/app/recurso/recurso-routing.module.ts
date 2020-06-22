import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursoListaComponent } from './recurso-lista/recurso-lista.component';
import { RecursoFormComponent } from './recurso-form/recurso-form.component';


const routes: Routes = [
  {
    path: '',
    component: RecursoListaComponent
  },
  {
    path: 'form',
    component: RecursoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursoRoutingModule { }
