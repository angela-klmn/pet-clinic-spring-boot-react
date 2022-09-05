package com.codecool.petclinic.repository;

import com.codecool.petclinic.model.Visit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JpaVisitRepository extends JpaRepository<Visit, Long> {
    List<Visit> findAllVisitsByPetId(Long petId);
}

