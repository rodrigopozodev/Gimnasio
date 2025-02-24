package com.gimnasio.controller;

import com.gimnasio.model.Ejercicio;
import com.gimnasio.service.EjercicioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ejercicios")
@CrossOrigin(origins = "*")
public class EjercicioController {
    private final EjercicioService service;

    public EjercicioController(EjercicioService service) {
        this.service = service;
    }

    @GetMapping
    public List<Ejercicio> listarEjercicios() {
        return service.obtenerEjercicios();
    }

    @PostMapping
    public Ejercicio crearEjercicio(@RequestBody Ejercicio ejercicio) {
        return service.agregarEjercicio(ejercicio);
    }
}
