package com.codecool.petclinic.model;

import java.time.LocalDate;
import java.util.Set;


public class Pet {
    private static int idTracker = 0;

    private int id;
    private String name;
    private LocalDate birthDate;
    private PetType type;
    private Owner owner;
    private Set<Treatment> treatments;

    public Pet(String name, LocalDate birthDate, PetType type, Owner owner, Set<Treatment> treatments) {
        this.name = name;
        this.birthDate = birthDate;
        this.type = type;
        this.owner = owner;
        this.treatments = treatments;

        this.id = idTracker;
        idTracker++;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public PetType getType() {
        return type;
    }

    public void setType(PetType type) {
        this.type = type;
    }

    public Owner getOwner() {
        return owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }

    public Set<Treatment> getTreatments() {
        return treatments;
    }

    public void setTreatments(Set<Treatment> treatments) {
        this.treatments = treatments;
    }

    @Override
    public String toString() {
        return "Pet{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", birthDate=" + birthDate +
                ", type=" + type +
                ", owner=" + owner +
                ", treatments=" + treatments +
                '}';
    }
}
