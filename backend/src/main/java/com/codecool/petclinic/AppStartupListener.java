package com.codecool.petclinic;

import com.codecool.petclinic.model.*;
import com.codecool.petclinic.model.types.PetType;
import com.codecool.petclinic.model.types.TreatmentType;
import com.codecool.petclinic.repository.OwnerRepository;
import com.codecool.petclinic.repository.UserRepo;
import com.codecool.petclinic.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;

@Component
public class AppStartupListener implements ApplicationListener <ContextRefreshedEvent> {

    OwnerRepository ownerRepository;
    UserRepo userRepo;
    UserService userService;

    @Autowired
    public AppStartupListener(OwnerRepository ownerRepository, UserRepo userRepo, UserService userService) {
        this.ownerRepository = ownerRepository;
        this.userRepo = userRepo;
        this.userService = userService;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        System.out.println("-------------------------Running after context started.-------------------------");
        Owner owner1 = new Owner("John", "Lennon", "john@lennon.com", "+66 666 66 66");
        Owner owner2 = new Owner("Mariah", "Carey", "mary@cary.com", "+36 70 333 888");
        Owner owner3 = new Owner("Mick", "Jagger", "mick@jagger.org", "+381 9756 32");
        Owner owner4 = new Owner("Janet", "Jackson", "jenny@jackson.org", "+42 55 88993");
        Owner owner5 = new Owner("John", "Travolta", "john@faceoff.com", "+42 55 88993");
        Owner owner6 = new Owner("Barbara", "Streisand", "barby@streisand.org", "+42 55 88993");
        Owner owner7 = new Owner("Johnny", "Cash", "johnny@folsomprison.org", "+42 55 88993");
        Owner owner8 = new Owner("Peter", "Mahjohng", "jenny@jackson.org", "+42 55 88993");

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

        ownerRepository.save(owner1);
        ownerRepository.save(owner2);
        ownerRepository.save(owner3);
        ownerRepository.save(owner4);
        ownerRepository.save(owner5);
        ownerRepository.save(owner6);
        ownerRepository.save(owner7);
        ownerRepository.save(owner8);

        userService.saveUser(new AppUser(null, "Angi Doktor", "angi@petclinic.com", "aaaa", new ArrayList<>()));
        userService.saveUser(new AppUser(null, "Kristof Doktor", "kristof@petclinic.com", "aaaa", new ArrayList<>()));
        userService.saveUser(new AppUser(null, "Domi Doktor", "domi@petclinic.com", "aaaa", new ArrayList<>()));
        userService.saveUser(new AppUser(null, "John Lennon", "john@lennon.com", "aaaa", new ArrayList<>()));
        userService.saveUser(new AppUser(null, "Mariah Carey", "mary@cary.com", "aaaa", new ArrayList<>()));
        userService.saveUser(new AppUser(null, "Mick Jagger", "mick@jagger.org", "aaaa", new ArrayList<>()));
        userService.saveUser(new AppUser(null, "Tina Turner", "tina@turner.org", "aaaa", new ArrayList<>()));

        userService.saveRole(new Role(null, "ROLE_CLIENT"));
        userService.saveRole(new Role(null, "ROLE_EMPLOYEE"));

        userService.addRoleToUser("john@lennon.com", "ROLE_CLIENT");
        userService.addRoleToUser("tina@turner.org", "ROLE_CLIENT");
        userService.addRoleToUser("mick@jagger.org", "ROLE_CLIENT");
        userService.addRoleToUser("mary@cary.com", "ROLE_CLIENT");
        userService.addRoleToUser("domi@petclinic.com", "ROLE_EMPLOYEE");
        userService.addRoleToUser("kristof@petclinic.com", "ROLE_EMPLOYEE");
        userService.addRoleToUser("angi@petclinic.com", "ROLE_EMPLOYEE");

    }

}
