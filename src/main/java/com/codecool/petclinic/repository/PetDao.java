package com.codecool.petclinic.repository;

import com.codecool.petclinic.model.Pet;

import java.util.Set;

public interface PetDao {
    Set<Pet> getAllPets();
    Pet getPetByName();
    Pet getPetById();
    void addPet(Pet pet);
}
