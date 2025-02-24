import { Component } from '@angular/core';
import { FormularioEjercicioComponent } from '../formulario-ejercicio/formulario-ejercicio.component';

@Component({
  selector: 'app-lista-ejercicios',
  templateUrl: './lista-ejercicios.component.html',
  styleUrls: ['./lista-ejercicios.component.css'],
  standalone: true,
  imports: [FormularioEjercicioComponent] // 👈 Agregar aquí el componente del formulario
})
export class ListaEjerciciosComponent {}
