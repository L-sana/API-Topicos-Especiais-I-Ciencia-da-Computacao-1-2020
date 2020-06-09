import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';


@NgModule({
  declarations: [PessoaListaComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
