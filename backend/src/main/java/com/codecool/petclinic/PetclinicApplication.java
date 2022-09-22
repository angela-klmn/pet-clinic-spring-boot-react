package com.codecool.petclinic;

import com.codecool.petclinic.model.*;
import com.codecool.petclinic.model.types.PetType;
import com.codecool.petclinic.model.types.TreatmentType;
import com.codecool.petclinic.repository.OwnerRepository;
import com.codecool.petclinic.repository.UserRepo;
import com.codecool.petclinic.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.util.ArrayList;

@SpringBootApplication
public class PetclinicApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetclinicApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	}

