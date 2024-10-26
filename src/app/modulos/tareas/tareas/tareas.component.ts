import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../servicios/tarea.service';
import { Tarea } from './tarea.model';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit {

  tareas: Tarea[] = [];
  mostrarModal: boolean = false;
  tareaParaEditar: Tarea | null = null;
  estadoFiltro: string = 'todos';
  buscarTitulo: string = '';


  get tareasFiltradas() {
    return this.tareas.filter(tarea => {
      const estadoCoincide = this.estadoFiltro === 'todos' || tarea.estado === this.estadoFiltro;
      const tituloCoincide = tarea.titulo.toLowerCase().includes(this.buscarTitulo.toLowerCase());
      return estadoCoincide && tituloCoincide;
    });
  }

  constructor(private tareaService: TareaService) { }

  ngOnInit() {
    this.cargarTareas();
  }

  cargarTareas() {
    this.tareaService.obtenerTareas().subscribe(tareas => {
      this.tareas = tareas;
    });
  }

  agregarTarea(tarea: Tarea) {
    if (!this.tareaParaEditar) {
      //agregar una nueva tarea
      this.tareaService.agregarTarea(tarea).then(() => {
        this.cargarTareas();
      });
    } else {
      //actualizar tarea existente
      this.tareaService.actualizarTarea({ ...this.tareaParaEditar, ...tarea }).then(() => {
        this.cargarTareas(); 
      });
      this.tareaParaEditar = null; 
    }
    this.cerrarModal(); 
  }

  eliminarTarea(id: string) {
    const confirmacion = confirm("¿Estás seguro de que deseas eliminar esta tarea?");
    if (confirmacion) {
        this.tareaService.eliminarTarea(id).then(() => {
            this.cargarTareas(); 
        });
    }
}

  abrirModal() {
    this.mostrarModal = true; 
    this.tareaParaEditar = null;
  }

  editarTarea(tarea: Tarea) {
    console.log('Editando tarea:', tarea);
    this.tareaParaEditar = tarea; 
    this.mostrarModal = true; 
  }

  cerrarModal() {
    this.mostrarModal = false; 
    this.tareaParaEditar = null;
  }

  marcarComoRealizada(id: string) {
    const tareaIndex = this.tareas.findIndex(t => t.id === id);
    if (tareaIndex !== -1) {
      this.tareas[tareaIndex].estado = 'realizada'; 
      this.tareaService.actualizarTarea(this.tareas[tareaIndex]);
    }
  }

}
