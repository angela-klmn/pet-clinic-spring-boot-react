package com.codecool.petclinic.service;

import com.codecool.petclinic.configuration.DbConfiguration;
import com.codecool.petclinic.model.Pet;
import com.codecool.petclinic.repository.PetDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class PetService {
    private PetDao petDao;


    @Autowired
    public PetService(PetDao petDao) {
        this.petDao = petDao;
    }

    public Set<Pet> getAllPets() {
        Set<Pet> pets = petDao.getAllPets();
        return pets;
    }

    public void addPet(Pet petToAdd) {
        petDao.addPet(petToAdd);
    }

    public void updatePet(Pet petToUpdate, int id) {
        petDao.updatePet(petToUpdate, id);
    }

    public Pet deletePet(int id) {
        Pet deletedPet = petDao.deletePet(id);
        return deletedPet;
    }
}
