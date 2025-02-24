import { Component } from '@angular/core';
import { EjercicioService } from '../../../../core/services/ejercicio.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-ejercicio',
  templateUrl: './formulario-ejercicio.component.html',
  standalone: true,
  imports: [FormsModule]
})
export class FormularioEjercicioComponent {
  ejercicio = { nombre: '', musculo: '', series: 0, repeticiones: 0, peso: 0, nivel: 'principiante' };

  constructor(private ejercicioService: EjercicioService) {}

  agregarEjercicio() {
    this.ejercicioService.agregarEjercicio(this.ejercicio).subscribe(() => {
      alert('Ejercicio agregado con éxito');
      this.ejercicio = { nombre: '', musculo: '', series: 0, repeticiones: 0, peso: 0, nivel: 'principiante' };
    });
  }
}
