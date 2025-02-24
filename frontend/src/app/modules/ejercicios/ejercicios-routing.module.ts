import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEjerciciosComponent } from './pages/lista-ejercicios/lista-ejercicios.component';

const routes: Routes = [{ path: '', component: ListaEjerciciosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjerciciosRoutingModule {}
