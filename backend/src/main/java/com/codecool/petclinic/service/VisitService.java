package com.codecool.petclinic.service;

import com.codecool.petclinic.model.Pet;
import com.codecool.petclinic.model.Visit;
import com.codecool.petclinic.repository.JpaPetRepository;
import com.codecool.petclinic.repository.JpaVisitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class VisitService {

    private final JpaVisitRepository visitRepository;
    private final JpaPetRepository petRepository;

    @Autowired
    public VisitService(JpaVisitRepository visitRepository, JpaPetRepository petRepository) {
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
