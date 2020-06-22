import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilListaComponent } from './perfil-lista/perfil-lista.component';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';


const routes: Routes = [
  {
    path: '',
    component: PerfilListaComponent
  },
  {
    path: 'form',
    component: PerfilFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
