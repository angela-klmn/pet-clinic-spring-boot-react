package com.codecool.petclinic.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(
        name="owner",
        uniqueConstraints = {@UniqueConstraint(name="owner_email_unique", columnNames = "email")}
)
public class Owner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private Long id;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    //private Set<Integer> petIds;
    @Column(nullable = false)
    private String email;
    private String phoneNumber;


    public Owner(String firstName, String lastName, String email, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        //this.petIds = petIds;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }


    public Long getId() {
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

//    public Set<Integer> getPetIds() {
//        return petIds;
//    }

//    public void setPetIds(Set<Integer> petIds) {
//        this.petIds = petIds;
//    }

    public String getemail() {
        return email;
    }

    public void setemail(String eMail) {
        this.email = eMail;
    }

    @Override
    public String toString() {
        return "Owner{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                //", petIds=" + petIds +
                ", eMail='" + email + '\'' +
                '}';
    }

//    public void addPetId(int petId) {
//        if (petIds == null) {
//            petIds = new HashSet<>();
//            petIds.add(petId);
//        } else {
//            petIds.add(petId);
//        }
//    }
}
