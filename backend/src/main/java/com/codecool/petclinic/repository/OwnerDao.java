package com.codecool.petclinic.repository;

import com.codecool.petclinic.model.Owner;

import java.util.Set;

public interface OwnerDao {

    Set<Owner> getAllOwners();
    Owner getOwnerByName();
    Owner getOwnerById(int id);
    void addOwner(Owner owner);
    void updateOwner(Owner owner, int id);
    Owner deleteOwner(int id);

    void addPetIdToOwner(int ownerId, int petId);
}
