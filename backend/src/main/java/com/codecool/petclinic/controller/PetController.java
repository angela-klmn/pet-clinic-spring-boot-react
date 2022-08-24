package com.codecool.petclinic.controller;

import com.codecool.petclinic.model.Pet;
import com.codecool.petclinic.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PetController {
    private PetService petService;

    @Autowired
    public PetController(PetService petService) {
        this.petService = petService;
    }

    @GetMapping("/")
    public String index() {
        return "Hello! This is the HOME page";
    }


    @GetMapping("/pets")
    public Set<Pet> listAllPets() {
    Set<Pet> pets =  petService.getAllPets();
        return pets;
    }

    @GetMapping("/pets/{id}")
    public Pet getPet(@PathVariable int id) {
        Pet pet = petService.getPetById(id);
        return pet;
    }

    @DeleteMapping("/pets/{id}")
    public String deletePet(@PathVariable int id) {
        Pet deletedPet = petService.deletePet(id);
        if (deletedPet == null) {
            return "Could NOT delete pet";
        }
        return "Successfully deleted: " + deletedPet;
    }

    @PostMapping(value = "/pets/add/{ownerId}")
    public String addPet(@RequestBody Pet petToAdd, @PathVariable int ownerId) {
        petService.addPet(petToAdd, ownerId);
        return petToAdd.toString();

    }

    @PutMapping(value = "/pets/update/{id}")
    public void updatePet(@RequestBody Pet petToUpdate, @PathVariable int id) {
        petService.updatePet(petToUpdate, id);
    }
}
