package com.gimnasio.service;

import com.gimnasio.model.Ejercicio;
import com.gimnasio.repository.EjercicioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EjercicioService {
    private final EjercicioRepository repository;

    public EjercicioService(EjercicioRepository repository) {
        this.repository = repository;
    }

    public List<Ejercicio> obtenerEjercicios() {
        return repository.findAll();
    }

    public Ejercicio agregarEjercicio(Ejercicio ejercicio) {
        return repository.save(ejercicio);
    }
}
