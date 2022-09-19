package com.codecool.petclinic.repository;

import com.codecool.petclinic.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepo extends JpaRepository<AppUser, Long> {
    AppUser findByUsername(String username);
}