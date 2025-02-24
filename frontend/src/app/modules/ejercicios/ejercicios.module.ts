import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { ListaEjerciciosComponent } from './pages/lista-ejercicios/lista-ejercicios.component';
import { FormularioEjercicioComponent } from './pages/formulario-ejercicio/formulario-ejercicio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    FormsModule,
    ListaEjerciciosComponent,  // 👈 Agregado en imports
    FormularioEjercicioComponent // 👈 Agregado en imports
  ]
})
export class EjerciciosModule {}
