package com.codecool.petclinic.repository;

import com.codecool.petclinic.model.Visit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaVisitRepository extends JpaRepository<Visit, Long> {
}

