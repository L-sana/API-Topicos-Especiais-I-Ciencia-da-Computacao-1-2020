import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotacaoRoutingModule } from './anotacao-routing.module';
import { AnotacaoListaComponent } from './anotacao-lista/anotacao-lista.component';
import { AnotacaoFormComponent } from './anotacao-form/anotacao-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AnotacaoListaComponent, AnotacaoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    AnotacaoRoutingModule
  ]
})
export class AnotacaoModule { }
