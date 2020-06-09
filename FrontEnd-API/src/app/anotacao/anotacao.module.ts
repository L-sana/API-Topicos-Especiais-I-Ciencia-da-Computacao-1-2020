import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotacaoRoutingModule } from './anotacao-routing.module';
import { AnotacaoListaComponent } from './anotacao-lista/anotacao-lista.component';


@NgModule({
  declarations: [AnotacaoListaComponent],
  imports: [
    CommonModule,
    AnotacaoRoutingModule
  ]
})
export class AnotacaoModule { }
