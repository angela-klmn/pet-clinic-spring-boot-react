package com.codecool.petclinic.service;

import com.codecool.petclinic.model.Owner;
import com.codecool.petclinic.repository.OwnerDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class OwnerService {
    private OwnerDao ownerDao;


    @Autowired
    public OwnerService(OwnerDao ownerDao) {
        this.ownerDao = ownerDao;
    }

    public Set<Owner> getAllOwners() {
        Set<Owner> owners = ownerDao.getAllOwners();
        return owners;
    }

    public Owner getOwnerById(int ownerId) {
        Owner owner = ownerDao.getOwnerById(ownerId);
        return owner;
    }

    public void addOwner(Owner ownerToAdd) {
        ownerDao.addOwner(ownerToAdd);
    }

    public void updateOwner(Owner ownerToUpdate, int id) {
        ownerDao.updateOwner(ownerToUpdate, id);
    }

    public Owner deleteOwner(int id) {
        Owner deletedOwner = ownerDao.deleteOwner(id);
        return deletedOwner;
    }

    public void addPetIdToOwner(int ownerId, int petId) {
        ownerDao.addPetIdToOwner(ownerId, petId);
    }
}
