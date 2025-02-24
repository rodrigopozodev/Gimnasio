import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEjerciciosComponent } from './lista-ejercicios.component';

describe('ListaEjerciciosComponent', () => {
  let component: ListaEjerciciosComponent;
  let fixture: ComponentFixture<ListaEjerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEjerciciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
