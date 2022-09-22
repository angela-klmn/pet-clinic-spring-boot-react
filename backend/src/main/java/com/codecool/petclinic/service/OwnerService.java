package com.codecool.petclinic.service;

import com.codecool.petclinic.model.DTOs.OwnerDTO;
import com.codecool.petclinic.model.Owner;
import com.codecool.petclinic.repository.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OwnerService {

    private OwnerRepository ownerRepository;


    @Autowired
    public OwnerService(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }

    public List<Owner> getAllOwners() {
        List<Owner> owners = ownerRepository.findAll();
        return owners;
    }

    public Owner getOwnerById(Long ownerId) {
        Owner owner = ownerRepository.findById(ownerId).get();
        return owner;
    }

    public void addOwner(Owner ownerToAdd) {
        ownerRepository.save(ownerToAdd);
    }


    public void updateOwner(OwnerDTO ownerDTO, Long ownerId) {
        Owner ownerToUpdate = ownerRepository.getReferenceById(ownerId);
        if (isNotEmpty(ownerDTO.getFirstName())) {
            ownerToUpdate.setFirstName(ownerDTO.getFirstName());
        }
        if (isNotEmpty(ownerDTO.getLastName())) {
            ownerToUpdate.setLastName(ownerDTO.getLastName());
        }
        if (isNotEmpty(ownerDTO.getEmail())) {
            ownerToUpdate.setEmail(ownerDTO.getEmail());
        }
        if (isNotEmpty(ownerDTO.getPhoneNumber())) {
            ownerToUpdate.setPhoneNumber(ownerDTO.getPhoneNumber());
        }
        ownerRepository.save(ownerToUpdate);
    }

    private boolean isNotEmpty(String DtoGetInfo) {
        return !(DtoGetInfo == "" || DtoGetInfo == null);
    }

    public void deleteOwner(Long id) {
        ownerRepository.deleteById(id);
    }

    public List<Owner> getOwnersByName(String name) {
        List<Owner> owners = ownerRepository.findOwnerByFirstOrLastName(name);
        return owners;
    }
}
