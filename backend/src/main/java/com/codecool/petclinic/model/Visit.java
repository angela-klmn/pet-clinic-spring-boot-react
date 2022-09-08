package com.codecool.petclinic.model;


import com.codecool.petclinic.model.types.TreatmentType;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "visit")
public class Visit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date;
    private TreatmentType treatmentType;
    private String description;
    private int price;
    @ManyToOne
    @JsonIgnore
    private Pet pet;

//    public Visit(TreatmentType treatmentType, String description, int price, Pet pet) {
//        this.treatmentType = treatmentType;
//        this.description = description;
//        this.price = price;
//        this.pet = pet;
//    }

    public Visit(TreatmentType treatmentType, String description, int price) {
        this.treatmentType = treatmentType;
        this.description = description;
        this.price = price;
        this.date = LocalDate.now();
    }

    public Visit() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TreatmentType getTreatmentType() {
        return treatmentType;
    }

    public void setTreatmentType(TreatmentType treatmentType) {
        this.treatmentType = treatmentType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Visit{" +
                "id=" + id +
                ", date=" + date +
                ", treatmentType=" + treatmentType +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", pet=" + pet +
                '}';
    }
}


