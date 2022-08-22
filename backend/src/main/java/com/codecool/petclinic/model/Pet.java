package com.codecool.petclinic.model;

import com.codecool.petclinic.model.types.PetType;

import java.time.LocalDate;
import java.util.Set;


public class Pet {
    private static int idTracker = 1;

    private int id;
    private String name;
    private LocalDate birthDate;
    private PetType type;
    private int ownerId;
    private Set<Treatment> treatments;

    public Pet(String name, LocalDate birthDate, PetType type, int ownerId, Set<Treatment> treatments) {
        this.name = name;
        this.birthDate = birthDate;
        this.type = type;
        this.ownerId = ownerId;
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

    public int getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(int ownerId) {
        this.ownerId = ownerId;
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
                ", owner=" + ownerId +
                ", treatments=" + treatments +
                '}';
    }
}
