package com.codecool.petclinic.controller;

import com.codecool.petclinic.model.Pet;
import com.codecool.petclinic.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

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

    @GetMapping("/pet/{id}")
    public String getPet(@PathVariable int id) {

        return "This is the profile page for dog, with id: " + id;
    }

    @DeleteMapping("/pet/{id}")
    public String deletePet(@PathVariable int id) {
        Pet deletedPet = petService.deletePet(id);
        if (deletedPet == null) {
            return "Could NOT delete pet";
        }
        return "Successfully deleted: " + deletedPet;
    }

    @PostMapping(value = "/pets/add", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String addPet(@RequestBody Pet petToAdd) {

        petService.addPet(petToAdd);
        return petToAdd.toString();

    }
}
