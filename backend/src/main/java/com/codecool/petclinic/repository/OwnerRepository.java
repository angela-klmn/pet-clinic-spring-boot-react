package com.codecool.petclinic.repository;

import com.codecool.petclinic.model.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OwnerRepository extends JpaRepository<Owner, Long> {

    @Query(value= "select * from owner o where upper(o.first_name) = upper(?1) or upper(o.last_name) = upper(?1)",
            nativeQuery = true)
    List<Owner> findOwnerByFirstOrLastName(String name);

    Owner findOwnerByEmail(String email);
}