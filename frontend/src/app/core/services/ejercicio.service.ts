import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Ejercicio {
  id?: number;
  nombre: string;
  musculo: string;
  series: number;
  repeticiones: number;
  peso: number;
  nivel: string;
}

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {
  private apiUrl = 'http://localhost:8080/api/ejercicios';

  constructor(private http: HttpClient) {}

  obtenerEjercicios(): Observable<Ejercicio[]> {
    return this.http.get<Ejercicio[]>(this.apiUrl);
  }

  agregarEjercicio(ejercicio: Ejercicio): Observable<Ejercicio> {
    return this.http.post<Ejercicio>(this.apiUrl, ejercicio);
  }
}
