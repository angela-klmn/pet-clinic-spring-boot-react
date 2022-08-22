package com.codecool.petclinic.repository;

import com.codecool.petclinic.model.Owner;
import com.codecool.petclinic.model.Pet;
import com.codecool.petclinic.model.types.PetType;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;


public class PetDaoInMemory implements PetDao {
    Set<Pet> petStorage = new HashSet<>();

    public PetDaoInMemory() {
        petStorage.add(new Pet("Doggie", LocalDate.of(2020, 1, 8), PetType.DOG, 0, null));
        petStorage.add(new Pet("Bunny", LocalDate.of(2022, 1, 9), PetType.BUNNY, 0, null));
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
    public int addPet(Pet pet) {
        petStorage.add(pet);
        System.out.println("This pet was added: " + pet);
        return pet.getId();
    }

    @Override
    public void updatePet(Pet transferPet, int id) {
        Pet pet = getPetById(id);
        if (transferPet.getName() != null) {
            pet.setName(transferPet.getName());
        }
        if (transferPet.getBirthDate() != null) {
            pet.setBirthDate(transferPet.getBirthDate());
        }
        if (transferPet.getType() != null) {
            pet.setType(transferPet.getType());
        }
        if (transferPet.getOwnerId() != 0) {
            pet.setOwnerId(transferPet.getOwnerId());
        }
        }


    @Override
    public Pet deletePet(int id) {
        for (Pet pet: petStorage) {
            if (pet.getId() == id) {
                petStorage.remove(pet);
                System.out.println("Succesfully removed: " + pet);
                return pet;
            }
        }
        return null;
    }
}
