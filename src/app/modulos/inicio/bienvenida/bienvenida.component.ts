import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {
  constructor(private router: Router) { }

  irATareas() {
    this.router.navigate(['/tareas']); // Navega a la ruta de Tareas
  }
}