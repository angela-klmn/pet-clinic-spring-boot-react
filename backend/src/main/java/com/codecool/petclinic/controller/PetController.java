package com.codecool.petclinic.controller;

import com.codecool.petclinic.model.Pet;
import com.codecool.petclinic.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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
    public List<Pet> listAllPets() {
    List<Pet> pets =  petService.getAllPets();
        return pets;
    }

    @GetMapping("/pets/owner/{ownerId}")
    public List<Pet> listAllPetsByOwnerId(@PathVariable Long ownerId) {
        List<Pet> pets =  petService.getPetsByOwnerId(ownerId);
        System.out.println("im in list all pets by owner id");
        System.out.println(pets);
        return pets;
    }

    @GetMapping("/pets/{id}")
    public Pet getPet(@PathVariable Long id) {
        Pet pet = petService.getPetById(id);
        return pet;
    }

    @DeleteMapping("/pets/{id}")
    public void deletePet(@PathVariable Long id) {
        petService.deletePet(id);
//        if (deletedPet == null) {
//            return "Could NOT delete pet";
//        }
//        return "Successfully deleted: " + deletedPet;
    }

    @PostMapping(value = "/pets/add/{ownerId}")
    public void addPet(@RequestBody Pet petToAdd, @PathVariable Long ownerId) {
        System.out.println("HELLO ADD PET TO OWNER");
        petService.addPet(petToAdd, ownerId);
        System.out.println("controller add pet");
        System.out.println(petToAdd);
    }

    @PutMapping(value = "/pets/update/{id}")
    public void updatePet(@RequestBody Pet petToUpdate, @PathVariable Long id) {
        petService.updatePet(petToUpdate, id);
    }
}
