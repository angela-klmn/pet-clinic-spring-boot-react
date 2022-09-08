package com.codecool.petclinic;

import com.codecool.petclinic.model.Owner;
import com.codecool.petclinic.model.Pet;
import com.codecool.petclinic.model.Visit;
import com.codecool.petclinic.model.types.PetType;
import com.codecool.petclinic.model.types.TreatmentType;
import com.codecool.petclinic.repository.JpaOwnerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class PetclinicApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetclinicApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(JpaOwnerRepository jpaOwnerRepository) {
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
			Visit visit3 = new Visit(TreatmentType.CONSULTATION, "Consultation", 10);

			pet1.addVisit(visit1);
			pet1.addVisit(visit2);
			pet3.addVisit(visit3);

			owner1.addPet(pet1);
			owner2.addPet(pet2);
			owner2.addPet(pet4);
			owner3.addPet(pet3);

			jpaOwnerRepository.save(owner1);
			jpaOwnerRepository.save(owner2);
			jpaOwnerRepository.save(owner3);
			jpaOwnerRepository.save(owner4);
		};
	}



}
