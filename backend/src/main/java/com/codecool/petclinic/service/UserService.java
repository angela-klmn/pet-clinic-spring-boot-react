package com.codecool.petclinic.service;


import com.codecool.petclinic.model.Role;
import com.codecool.petclinic.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User>getUsers();
}
