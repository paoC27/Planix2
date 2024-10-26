import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';



@NgModule({
  declarations: [
    BienvenidaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BienvenidaComponent]
})
export class InicioModule { }
