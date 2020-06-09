import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoListaComponent } from './grupo-lista/grupo-lista.component';


@NgModule({
  declarations: [GrupoListaComponent],
  imports: [
    CommonModule,
    GrupoRoutingModule
  ]
})
export class GrupoModule { }
