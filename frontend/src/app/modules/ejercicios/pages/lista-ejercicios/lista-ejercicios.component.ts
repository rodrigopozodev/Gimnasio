import { Component, OnInit } from '@angular/core';
import { EjercicioService } from '../../../../core/services/ejercicio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-ejercicios',
  standalone: true,
  imports: [CommonModule], // Agregar CommonModule
  templateUrl: './lista-ejercicios.component.html',
})
export class ListaEjerciciosComponent implements OnInit {
  ejercicios: any[] = [];

  constructor(private ejercicioService: EjercicioService) {}

  ngOnInit(): void {
    this.ejercicioService.obtenerEjercicios().subscribe(data => {
      this.ejercicios = data;
    });
  }
}
