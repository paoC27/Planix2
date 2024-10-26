import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasComponent } from './tareas/tareas.component';
import { FormsModule } from '@angular/forms';
import { ModalTareaComponent } from './modal-tarea/modal-tarea.component';


@NgModule({
  declarations: [
    TareasComponent,
    ModalTareaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TareasComponent
  ]
})
export class TareasModule { }
