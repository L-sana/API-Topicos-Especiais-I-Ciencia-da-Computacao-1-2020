import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilListaComponent } from './perfil-lista/perfil-lista.component';


const routes: Routes = [
  {
    path: '',
    component: PerfilListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
