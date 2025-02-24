import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'ejercicios', loadChildren: () => import('./modules/ejercicios/ejercicios.module').then(m => m.EjerciciosModule) },
  { path: '**', redirectTo: 'ejercicios' }
];
