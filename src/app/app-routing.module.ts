import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './modulos/tareas/tareas/tareas.component';
import { BienvenidaComponent } from './modulos/inicio/bienvenida/bienvenida.component';

const routes: Routes = [
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' }, // Cambia '/tareas' a '/bienvenida'
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'tareas', component: TareasComponent } // Ruta para el componente de tareas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
