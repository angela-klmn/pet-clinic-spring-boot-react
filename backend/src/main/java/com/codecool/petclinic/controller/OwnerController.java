package com.codecool.petclinic.controller;

import com.codecool.petclinic.model.DTOs.OwnerDTO;
import com.codecool.petclinic.model.Owner;
import com.codecool.petclinic.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OwnerController {
    private OwnerService ownerService;

    @Autowired
    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }


    @GetMapping("/owners")
    public List<Owner> listAllOwners() {
    List<Owner> owners =  ownerService.getAllOwners();
        System.out.println("LIST ALL OWNERS: " + owners);
        return owners;
    }

    @GetMapping("/owners/{id}")
    public Owner getOwner(@PathVariable Long id) {
        Owner owner = ownerService.getOwnerById(id);
        return owner;
    }

    @GetMapping("/owners/search/{name}")
    public List<Owner> getOwnerByName(@PathVariable String name) {
         List<Owner> owners = ownerService.getOwnersByName(name);
        System.out.println("SEARCH OWNERS: " + owners);
        return owners;
    }

    @GetMapping("/owners/username/{email}")
    public Owner getOwnerByUsername(@PathVariable String email) {
        Owner owner = ownerService.getOwnerByEmail(email);
        System.out.println("SEARCH OWNERS BY EMAIL: " + owner);
        return owner;
    }


    @DeleteMapping("/owners/{id}")
    public void deleteOwner(@PathVariable Long id) {
        ownerService.deleteOwner(id);
//        if (deletedOwner == null) {
//            return "Could NOT delete Owner";
//        }
//        return "Successfully deleted: " + deletedOwner;
    }

    @PostMapping(value = "/owners/add")
    public void addOwner(@RequestBody Owner ownerToAdd) {
        ownerService.addOwner(ownerToAdd);
    }

    @PutMapping(value = "/owners/update/{id}")
    public void updateOwner(@RequestBody OwnerDTO ownerDTO, @PathVariable Long id) {
        System.out.println(ownerDTO);
        ownerService.updateOwner(ownerDTO, id);
        System.out.println("we are in updateOwner");
    }
}
