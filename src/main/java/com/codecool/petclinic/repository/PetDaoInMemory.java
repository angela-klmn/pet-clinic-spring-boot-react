package com.codecool.petclinic.repository;

import com.codecool.petclinic.model.Owner;
import com.codecool.petclinic.model.Pet;
import com.codecool.petclinic.model.PetType;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;


public class PetDaoInMemory implements PetDao {
    Set<Pet> petStorage = new HashSet<>();

    public PetDaoInMemory() {
        petStorage.add(new Pet("Buksi", LocalDate.of(2020, 1, 8), PetType.DOG, new Owner(), null));
        petStorage.add(new Pet("Bunny", LocalDate.of(2022, 1, 9), PetType.BUNNY, new Owner(), null));
    }

    @Override
    public Set<Pet> getAllPets() {
        return petStorage;
    }

    @Override
    public Pet getPetByName() {
        return null;
    }

    @Override
    public Pet getPetById(int id) {
        for(Pet pet : petStorage) {
            if(pet.getId() == id) {
                return pet;
            }
        } return null;
    }

    @Override
    public void addPet(Pet pet) {
        petStorage.add(pet);
    }

    @Override
    public void updatePet(Pet updatedPet, int id) {
        Pet pet = getPetById(id);
        pet.setName(updatedPet.getName());
        pet.setBirthDate(updatedPet.getBirthDate());
        pet.setType(updatedPet.getType());
        pet.setOwner(updatedPet.getOwner());
        }

}
