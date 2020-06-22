import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoListaComponent } from './grupo-lista/grupo-lista.component';
import { GrupoFormComponent } from './grupo-form/grupo-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GrupoListaComponent, GrupoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    GrupoRoutingModule
  ]
})
export class GrupoModule { }
