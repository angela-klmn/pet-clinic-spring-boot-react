package com.codecool.petclinic.service;

import com.codecool.petclinic.model.Pet;
import com.codecool.petclinic.model.Visit;
import com.codecool.petclinic.repository.PetRepository;
import com.codecool.petclinic.repository.VisitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class VisitService {

    private final VisitRepository visitRepository;
    private final PetRepository petRepository;

    @Autowired
    public VisitService(VisitRepository visitRepository, PetRepository petRepository) {
        this.visitRepository = visitRepository;
        this.petRepository = petRepository;
    }

    public List<Visit> getVisitsByPetId(Long petId) {
        return visitRepository.findAllVisitsByPetId(petId);
    }

    public void addVisit(Visit visit, Long petId) {
        Pet pet = petRepository.getReferenceById(petId);
        visit.setPet(pet);
        visit.setDate(LocalDate.now());
        pet.addVisit(visit);
        visitRepository.save(visit);
    }

    public void deleteVisit(Long visitId) {
        visitRepository.deleteById(visitId);
    }
}
