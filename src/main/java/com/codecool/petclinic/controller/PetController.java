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
    public String listAllPets() {
    Set<Pet> pets =  petService.getAllPets();
        return pets.toString();
    }

    @GetMapping("/pet/{id}")
    public String getPet(@PathVariable Long id) {

        return "This is the profile page for dog, with id: " + id;
    }

    @PostMapping(value = "/pets/add", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String addPet(@RequestBody Pet petToAdd) {

        petService.addPet(petToAdd);
        return petToAdd.toString();

    }
}
