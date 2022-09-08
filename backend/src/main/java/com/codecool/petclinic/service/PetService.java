package com.codecool.petclinic.service;

import com.codecool.petclinic.model.Owner;
import com.codecool.petclinic.model.Pet;
import com.codecool.petclinic.repository.JpaOwnerRepository;
import com.codecool.petclinic.repository.JpaPetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService {
    private JpaOwnerRepository jpaOwnerRepository;
    private JpaPetRepository jpaPetRepository;


    @Autowired
    public PetService(JpaPetRepository jpaPetRepository, JpaOwnerRepository jpaOwnerRepository) {
        this.jpaPetRepository = jpaPetRepository;
        this.jpaOwnerRepository = jpaOwnerRepository;
    }

    public List<Pet> getAllPets() {
        List<Pet> pets = jpaPetRepository.findAll();
        return pets;
    }

    public List<Pet> getPetsByOwnerId(Long ownerId) {
        List<Pet> pets = jpaPetRepository.getPetsByOwnerId(ownerId);
        return pets;
    }

    public Pet getPetById(Long petId) {
        Pet pet = jpaPetRepository.findById(petId).get();
        return pet;
    }

    public void addPet(Pet petToAdd, Long ownerId) {
        Owner owner = jpaOwnerRepository.getReferenceById(ownerId);
        petToAdd.setOwner(owner);
        owner.addPet(petToAdd);
        jpaPetRepository.save(petToAdd);
    }

    public void updatePet(Pet petDTO, Long petId) {
        Pet petToUpdate = jpaPetRepository.getReferenceById(petId);
        if (!(petDTO.getName() == "" || petDTO.getName() == null)) {
            petToUpdate.setName(petDTO.getName());
        }
        if (!(petDTO.getBirthDate() == null)) {
            petToUpdate.setBirthDate(petDTO.getBirthDate());
        }
        if (!(petDTO.getType() == null)) {
            petToUpdate.setType(petDTO.getType());
        }

        jpaPetRepository.save(petToUpdate);
    }

    public void deletePet(Long id) {
        jpaPetRepository.deleteById(id);
    }
}
