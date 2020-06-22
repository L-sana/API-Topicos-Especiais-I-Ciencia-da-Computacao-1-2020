import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilListaComponent } from './perfil-lista/perfil-lista.component';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PerfilListaComponent, PerfilFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
