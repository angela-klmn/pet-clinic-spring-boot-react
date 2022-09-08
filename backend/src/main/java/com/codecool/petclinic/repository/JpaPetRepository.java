package com.codecool.petclinic.repository;

import com.codecool.petclinic.model.Owner;
import com.codecool.petclinic.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JpaPetRepository extends JpaRepository<Pet, Long> {
    List<Pet> getPetsByOwnerId(Long ownerId);
}
