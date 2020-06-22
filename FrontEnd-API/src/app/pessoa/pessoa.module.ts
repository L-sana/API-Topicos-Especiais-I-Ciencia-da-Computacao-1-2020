import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PessoaListaComponent, PessoaFormularioComponent],
  imports: [
    CommonModule,
    FormsModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
