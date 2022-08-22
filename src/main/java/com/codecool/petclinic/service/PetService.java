package com.codecool.petclinic.service;

import com.codecool.petclinic.model.Pet;
import com.codecool.petclinic.repository.OwnerDao;
import com.codecool.petclinic.repository.PetDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class PetService {
    private PetDao petDao;
    private OwnerDao ownerDao;


    @Autowired
    public PetService(PetDao petDao, OwnerDao ownerDao) {
        this.petDao = petDao;
        this.ownerDao = ownerDao;
    }

    public Set<Pet> getAllPets() {
        Set<Pet> pets = petDao.getAllPets();
        return pets;
    }

    public Pet getPetById(int petId) {
        Pet pet = petDao.getPetById(petId);
        return pet;
    }

    public void addPet(Pet petToAdd, int ownerId) {
        petToAdd.setOwnerId(ownerId);
        int petId = petDao.addPet(petToAdd);
        ownerDao.addPetIdToOwner(ownerId, petId);
    }

    public void updatePet(Pet petToUpdate, int id) {
        petDao.updatePet(petToUpdate, id);
    }

    public Pet deletePet(int id) {
        Pet deletedPet = petDao.deletePet(id);
        return deletedPet;
    }
}
