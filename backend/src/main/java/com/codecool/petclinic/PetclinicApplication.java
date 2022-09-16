package com.codecool.petclinic;

import com.codecool.petclinic.model.*;
import com.codecool.petclinic.model.types.PetType;
import com.codecool.petclinic.model.types.TreatmentType;
import com.codecool.petclinic.repository.JpaOwnerRepository;
import com.codecool.petclinic.repository.UserRepo;
import com.codecool.petclinic.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

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

//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/**").allowedOrigins("http://localhost:3000");
//			}
//		};
//	}

	@Bean
	CommandLineRunner commandLineRunner(JpaOwnerRepository jpaOwnerRepository, UserRepo userRepo, UserService userService) {
		return args -> {
			Owner owner1 = new Owner("John", "Lennon", "john@lennon.com", "+66 666 66 66");
			Owner owner2 = new Owner("Mariah", "Carey", "mary@cary.com", "+36 70 333 888");
			Owner owner3 = new Owner("Mick", "Jagger", "mick@jagger.org", "+381 9756 32");
			Owner owner4 = new Owner("Janet", "Jackson", "jenny@jackson.org", "+42 55 88993");

			Pet pet1 = new Pet("Fluffy", LocalDate.of(2022, 8, 11), PetType.DOG );
			Pet pet2 = new Pet("Bunny", LocalDate.of(2017, 4, 3), PetType.BUNNY );
			Pet pet3 = new Pet("Kitty", LocalDate.of(2020, 1, 16), PetType.CAT );
			Pet pet4 = new Pet("Crocky", LocalDate.of(2019, 12, 27), PetType.CROCODILE );

			Visit visit1 = new Visit(TreatmentType.VACCINATION, "Veszettség elleni oltas.", 20);
			Visit visit2 = new Visit(TreatmentType.DENTAL_TREATMENT, "Foghuzas", 30);
			Visit visit3 = new Visit(TreatmentType.SURGERY, "Foghuzas", 30);
			Visit visit4 = new Visit(TreatmentType.DENTAL_TREATMENT, "Foghuzas", 30);
			Visit visit5 = new Visit(TreatmentType.CONSULTATION, "Consultation", 10);

			pet1.addVisit(visit1);
			pet1.addVisit(visit2);
			pet1.addVisit(visit4);
			pet1.addVisit(visit5);
			pet3.addVisit(visit3);

			owner1.addPet(pet1);
			owner2.addPet(pet2);
			owner2.addPet(pet4);
			owner3.addPet(pet3);



			jpaOwnerRepository.save(owner1);
			jpaOwnerRepository.save(owner2);
			jpaOwnerRepository.save(owner3);
			jpaOwnerRepository.save(owner4);

//			AppUser user1 = new AppUser();
//			user1.setName("user1");
//			user1.setPassword("password1");
//			user1.setUsername("username1");
			//userRepo.save(user1);

			userService.saveUser(new AppUser(null, "Angi Doktor", "angi", "aaaa", new ArrayList<>()));
			userService.saveUser(new AppUser(null, "Kristof Doktor", "kristof", "aaaa", new ArrayList<>()));
			userService.saveUser(new AppUser(null, "Domi Doktor", "domi", "aaaa", new ArrayList<>()));
			userService.saveUser(new AppUser(null, "John Lennon", "john", "aaaa", new ArrayList<>()));
			userService.saveUser(new AppUser(null, "Tina Turner", "tina", "aaaa", new ArrayList<>()));

			userService.saveRole(new Role(null, "ROLE_CLIENT"));
			userService.saveRole(new Role(null, "ROLE_EMPLOYEE"));

			userService.addRoleToUser("john", "ROLE_CLIENT");
			userService.addRoleToUser("tina", "ROLE_CLIENT");
			userService.addRoleToUser("domi", "ROLE_EMPLOYEE");
			userService.addRoleToUser("kristof", "ROLE_EMPLOYEE");
			userService.addRoleToUser("angi", "ROLE_EMPLOYEE");


		};
	}



}
