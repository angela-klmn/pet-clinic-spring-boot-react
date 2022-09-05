package com.codecool.petclinic.model;


import com.codecool.petclinic.model.types.TreatmentType;

import javax.persistence.*;

@Entity
@Table(name = "visit")
public class Visit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private TreatmentType treatmentType;
    private String description;
    private int price;
    @ManyToOne
    private Pet pet;

    public Visit(TreatmentType treatmentType, String description, int price) {
        this.treatmentType = treatmentType;
        this.description = description;
        this.price = price;
    }

    public Visit() {
    }
}
