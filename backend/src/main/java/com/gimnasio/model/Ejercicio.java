package com.gimnasio.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "ejercicios")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class Ejercicio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String musculo;
    private int series;
    private int repeticiones;
    private double peso;
    private String nivel;
}
