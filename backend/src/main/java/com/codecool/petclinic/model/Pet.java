package com.codecool.petclinic.model;

import com.codecool.petclinic.model.types.PetType;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "pet")
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private LocalDate birthDate;
    private PetType type;
    @ManyToOne
    @JoinColumn(
            name = "owner_id",
            nullable = false
    )
    @JsonIgnore
    private Owner owner;
    @OneToMany(
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
            mappedBy = "pet"
    )
    private Set<Visit> treatments;



    public Pet(String name, LocalDate birthDate, PetType type) {
        this.name = name;
        this.birthDate = birthDate;
        this.type = type;
    }

    public Pet() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

//    public Set<Treatment> getTreatments() {
//        return treatments;
//    }
//
//    public void setTreatments(Set<Treatment> treatments) {
//        this.treatments = treatments;
//    }

    @Override
    public String toString() {
        return "Pet{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", birthDate=" + birthDate +
                ", type=" + type +
                //", owner=" + owner +
                //", treatments=" + treatments +
                '}';
    }
}
