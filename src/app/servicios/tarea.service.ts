import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Tarea } from '../modulos/tareas/tareas/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareasCollection: AngularFirestoreCollection<Tarea>;

  constructor(private firestore: AngularFirestore) {
    this.tareasCollection = this.firestore.collection<Tarea>('tareas');
  }

  //obtener todas las tareas
  obtenerTareas(): Observable<Tarea[]> {
    return this.tareasCollection.valueChanges({ idField: 'id' });
  }

  //agregar una nueva tarea
  agregarTarea(tarea: Tarea): Promise<void> {
    const id = this.firestore.createId();
    return this.tareasCollection.doc(id).set({ ...tarea, id });
  }

  //eliminar tarea por ID
  eliminarTarea(id: string): Promise<void> {
    return this.tareasCollection.doc(id).delete();
  }

  //actualizar una tarea
  actualizarTarea(tarea: Tarea): Promise<void> {
    return this.tareasCollection.doc(tarea.id).update(tarea);
  }
}