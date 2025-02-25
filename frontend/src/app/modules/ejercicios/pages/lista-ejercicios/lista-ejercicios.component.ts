import { Component, OnInit } from '@angular/core';
import { EjercicioService } from '../../../../core/services/ejercicio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-ejercicios',
  templateUrl: './lista-ejercicios.component.html',
  standalone: true,
  imports:[CommonModule]
})
export class ListaEjerciciosComponent implements OnInit {
  ejercicios: any[] = [];

  constructor(private ejercicioService: EjercicioService) {}

  ngOnInit() {
    this.cargarEjercicios();
  }

  cargarEjercicios() {
    this.ejercicioService.obtenerEjercicios().subscribe(data => {
      this.ejercicios = data;
    });
  }

  eliminarEjercicio(id: number) {
    if (confirm('¿Seguro que quieres eliminar este ejercicio?')) {
      this.ejercicioService.eliminarEjercicio(id).subscribe(() => {
        this.cargarEjercicios();
      });
    }
  }

  editarEjercicio(ejercicio: any) {
    alert('Aquí abriremos un formulario de edición en el futuro');
  }
}
