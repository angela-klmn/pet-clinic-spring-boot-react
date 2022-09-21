package com.codecool.petclinic.service;

import com.codecool.petclinic.model.Owner;
import com.codecool.petclinic.model.Pet;
import com.codecool.petclinic.repository.OwnerRepository;
import com.codecool.petclinic.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService {
    private OwnerRepository ownerRepository;
    private PetRepository petRepository;


    @Autowired
    public PetService(PetRepository petRepository, OwnerRepository ownerRepository) {
        this.petRepository = petRepository;
        this.ownerRepository = ownerRepository;
    }

    public List<Pet> getAllPets() {
        List<Pet> pets = petRepository.findAll();
        return pets;
    }

    public List<Pet> getPetsByOwnerId(Long ownerId) {
        List<Pet> pets = petRepository.getPetsByOwnerId(ownerId);
        return pets;
    }

    public Pet getPetById(Long petId) {
        Pet pet = petRepository.findById(petId).get();
        return pet;
    }

    public void addPet(Pet petToAdd, Long ownerId) {
        Owner owner = ownerRepository.getReferenceById(ownerId);
        petToAdd.setOwner(owner);
        owner.addPet(petToAdd);
        petRepository.save(petToAdd);
    }

    public void updatePet(Pet petDTO, Long petId) {
        Pet petToUpdate = petRepository.getReferenceById(petId);
        if (!(petDTO.getName() == "" || petDTO.getName() == null)) {
            petToUpdate.setName(petDTO.getName());
        }
        if (!(petDTO.getBirthDate() == null)) {
            petToUpdate.setBirthDate(petDTO.getBirthDate());
        }
        if (!(petDTO.getType() == null)) {
            petToUpdate.setType(petDTO.getType());
        }

        petRepository.save(petToUpdate);
    }

    public void deletePet(Long id) {
        petRepository.deleteById(id);
    }
}
