import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursoRoutingModule } from './recurso-routing.module';
import { RecursoListaComponent } from './recurso-lista/recurso-lista.component';
import { RecursoFormComponent } from './recurso-form/recurso-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RecursoListaComponent, RecursoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RecursoRoutingModule
  ]
})
export class RecursoModule { }
