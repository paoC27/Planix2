import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarea } from '../tareas/tarea.model';

@Component({
  selector: 'app-modal-tarea',
  templateUrl: './modal-tarea.component.html',
  styleUrl: './modal-tarea.component.css'
})
export class ModalTareaComponent {
  tarea: Tarea = { titulo: '', fecha: new Date(), descripcion: '', estado: 'pendiente' };
  @Output() tareaCreada = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<void>(); 
  @Input() tareaParaEditar: Tarea | null = null;

  ngOnChanges() {
    console.log('tareaParaEditar:', this.tareaParaEditar);
    if (this.tareaParaEditar) {
        this.tarea = { ...this.tareaParaEditar }; 
    } else {
        this.tarea = { titulo: '', fecha: new Date(), descripcion: '', estado: 'pendiente' }; 
    }
  }

  
  close() {
    this.tarea = { titulo: '', fecha: new Date(), descripcion: '', estado: 'pendiente' }; 
    this.closeModal.emit(); 
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.tarea = {
        ...this.tarea,
        titulo: form.value.titulo,
        fecha: form.value.fecha,
        descripcion: form.value.descripcion,
        estado: this.tarea.estado
      };
      this.tareaCreada.emit(this.tarea);
      form.reset(); 
      this.close(); 
    }
  }
  
  marcarComoRealizada() {
    if (this.tarea) {
      this.tarea.estado = 'realizada'; 
    }
  }
}
