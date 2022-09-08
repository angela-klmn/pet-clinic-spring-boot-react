package com.codecool.petclinic.controller;


import com.codecool.petclinic.model.Visit;
import com.codecool.petclinic.service.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VisitController {

    private VisitService visitService;

    @Autowired
    public VisitController(VisitService visitService) {
        this.visitService = visitService;
    }

    @GetMapping("/visits/pet/{pet-id}")
    public List<Visit> getVisitsByPetId(@PathVariable("pet-id") Long petId) {
        return visitService.getVisitsByPetId(petId);
    }

    @PostMapping("/visits/add/{pet-id}")
    public void addVisit(@RequestBody Visit visit, @PathVariable("pet-id") Long petId) {
        visitService.addVisit(visit, petId);
    }

    @DeleteMapping("/visits/delete/{visit-id}")
    public void deleteVisit(@PathVariable("visit-id") Long visitId) {
        visitService.deleteVisit(visitId);
    }

}
