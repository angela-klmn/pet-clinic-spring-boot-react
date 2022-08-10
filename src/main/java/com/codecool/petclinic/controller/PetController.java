package com.codecool.petclinic.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PetController {


    @GetMapping("/")
    public String index() {
        return "Hello! This is the HOME page";
    }


    @GetMapping("/pets")
    public String listAllPets() {

        return "This page will list all pets";
    }

    @GetMapping("/pet/{id}")
    public String getPet(@PathVariable Long id) {

        return "This is the profile page for dog, with id: " + id;
    }
}
