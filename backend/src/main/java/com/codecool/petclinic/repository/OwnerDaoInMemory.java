package com.codecool.petclinic.repository;

import com.codecool.petclinic.model.Owner;

import java.util.HashSet;
import java.util.Set;


public class OwnerDaoInMemory implements OwnerDao {
    Set<Owner> ownerStorage = new HashSet<>();

    public OwnerDaoInMemory() {
        ownerStorage.add(new Owner("John", "Lennon", null, "john@lennon.com"));
        ownerStorage.add(new Owner("Janet", "Jackson", null, "janet@jackson.org"));
        ownerStorage.add(new Owner("Mick", "Jagger", null, "mick@jagger.net"));
        ownerStorage.add(new Owner("Tina", "Turner", null, "tina@turner.com"));
    }

    @Override
    public Set<Owner> getAllOwners() {
        return ownerStorage;
    }

    @Override
    public Owner getOwnerByName() {
        return null;
    }

    @Override
    public Owner getOwnerById(int id) {
        for(Owner owner : ownerStorage) {
            if(owner.getId() == id) {
                return owner;
            }
        } return null;
    }

    @Override
    public void addOwner(Owner owner) {
        ownerStorage.add(owner);
    }

    @Override
    public void updateOwner(Owner transferOwner, int id) {

        Owner owner = getOwnerById(id);
        System.out.println("t.lastname" + transferOwner.getLastName());
        if (!(transferOwner.getFirstName() == null || ("").equals(transferOwner.getFirstName()))) {
            owner.setFirstName(transferOwner.getFirstName());
        }
        if (!(transferOwner.getLastName() == null || ("").equals(transferOwner.getLastName()))) {
            owner.setLastName(transferOwner.getLastName());
        }
        if (!(transferOwner.geteMail() == null || ("").equals(transferOwner.geteMail()))) {
            owner.seteMail(transferOwner.geteMail());
        }
    }


    @Override
    public Owner deleteOwner(int id) {
        for (Owner owner: ownerStorage) {
            if (owner.getId() == id) {
                ownerStorage.remove(owner);
                System.out.println("Succesfully removed: " + owner);
                return owner;
            }
        }
        return null;
    }

    @Override
    public void addPetIdToOwner(int ownerId, int petId) {
        Owner owner = getOwnerById(ownerId);
        owner.addPetId(petId);

    }
}
