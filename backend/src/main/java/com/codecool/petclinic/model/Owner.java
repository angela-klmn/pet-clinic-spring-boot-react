package com.codecool.petclinic.model;

import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;


public class Owner {
    private static int idTracker = 1;

    private int id;
    private String firstName;
    private String lastName;
    private Set<Integer> petIds;
    private String eMail;

    public Owner() {
        this.id = idTracker;
        idTracker++;
    }

    public Owner(String firstName, String lastName, Set<Integer> petIds, String eMail) {
        this.id = idTracker;
        idTracker++;
        this.firstName = firstName;
        this.lastName = lastName;
        this.petIds = petIds;
        this.eMail = eMail;
    }


    public int getId() {
        return id;
    }


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Set<Integer> getPetIds() {
        return petIds;
    }

    public void setPetIds(Set<Integer> petIds) {
        this.petIds = petIds;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    @Override
    public String toString() {
        return "Owner{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", petIds=" + petIds +
                ", eMail='" + eMail + '\'' +
                '}';
    }

    public void addPetId(int petId) {
        if (petIds == null) {
            petIds = new HashSet<>();
            petIds.add(petId);
        } else {
            petIds.add(petId);
        }
    }
}
