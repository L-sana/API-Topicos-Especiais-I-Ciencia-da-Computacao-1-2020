import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoListaComponent } from './grupo-lista/grupo-lista.component';
import { GrupoFormComponent } from './grupo-form/grupo-form.component';


const routes: Routes = [
    {
      path: '',
      component: GrupoListaComponent
    },
    {
      path: 'form',
      component: GrupoFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
