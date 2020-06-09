import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoListaComponent } from './grupo-lista/grupo-lista.component';


const routes: Routes = [
    {
      path: '',
      component: GrupoListaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
