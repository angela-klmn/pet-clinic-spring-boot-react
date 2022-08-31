package com.codecool.petclinic;

import com.codecool.petclinic.model.Owner;
import com.codecool.petclinic.repository.JpaOwnerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

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

			jpaOwnerRepository.save(owner1);
			jpaOwnerRepository.save(owner2);
			jpaOwnerRepository.save(owner3);
			jpaOwnerRepository.save(owner4);
		};
	}



}
