import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {
  private apiUrl = 'http://localhost:8080/api/ejercicios'; // Reemplazar con URL del backend

  constructor(private http: HttpClient) {}

  obtenerEjercicios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarEjercicio(ejercicio: any): Observable<any> {
    return this.http.post(this.apiUrl, ejercicio);
  }

  eliminarEjercicio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
