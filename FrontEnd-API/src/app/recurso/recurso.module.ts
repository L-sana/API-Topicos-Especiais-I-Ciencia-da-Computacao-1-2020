import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursoRoutingModule } from './recurso-routing.module';
import { RecursoListaComponent } from './recurso-lista/recurso-lista.component';


@NgModule({
  declarations: [RecursoListaComponent],
  imports: [
    CommonModule,
    RecursoRoutingModule
  ]
})
export class RecursoModule { }
