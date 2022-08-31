package com.codecool.petclinic.repository;

import com.codecool.petclinic.model.Owner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaOwnerRepository extends JpaRepository<Owner, Long> {
}
