package com.codecool.petclinic.repository;

import com.codecool.petclinic.model.Owner;
import com.codecool.petclinic.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaPetRepository extends JpaRepository<Pet, Long> {
}
