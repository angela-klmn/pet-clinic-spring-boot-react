package com.codecool.petclinic.service;

import com.codecool.petclinic.model.DTOs.OwnerDTO;
import com.codecool.petclinic.model.Owner;
import com.codecool.petclinic.repository.JpaOwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OwnerService {

    private JpaOwnerRepository jpaOwnerRepository;


    @Autowired
    public OwnerService(JpaOwnerRepository jpaOwnerRepository) {
        this.jpaOwnerRepository = jpaOwnerRepository;
    }

    public List<Owner> getAllOwners() {
        List<Owner> owners = jpaOwnerRepository.findAll();
        return owners;
    }

    public Owner getOwnerById(Long ownerId) {
        Owner owner = jpaOwnerRepository.findById(ownerId).get();
        return owner;
    }

    public void addOwner(Owner ownerToAdd) {
        jpaOwnerRepository.save(ownerToAdd);
    }


    public void updateOwner(Owner ownerDTO, Long ownerId) {
        Owner ownerToUpdate = jpaOwnerRepository.getReferenceById(ownerId);
        if (!(ownerDTO.getFirstName() == "" || ownerDTO.getFirstName() == null)) {
            ownerToUpdate.setFirstName(ownerDTO.getFirstName());
        }
        if (!(ownerDTO.getLastName() == "" || ownerDTO.getLastName() == null)) {
            ownerToUpdate.setLastName(ownerDTO.getLastName());
        }
        if (!(ownerDTO.getEmail() == "" || ownerDTO.getEmail() == null)) {
            ownerToUpdate.setEmail(ownerDTO.getEmail());
        }
        if (!(ownerDTO.getPhoneNumber() == "" || ownerDTO.getPhoneNumber() == null)) {
            ownerToUpdate.setPhoneNumber(ownerDTO.getPhoneNumber());
        }
        jpaOwnerRepository.save(ownerToUpdate);
    }

    public void deleteOwner(Long id) {
        jpaOwnerRepository.deleteById(id);
    }

    public List<Owner> getOwnersByName(String name) {
        List<Owner> owners = jpaOwnerRepository.findOwnerByFirstOrLastName(name);
        return owners;
    }
}
