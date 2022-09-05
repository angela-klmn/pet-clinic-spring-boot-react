package com.codecool.petclinic.service;

import com.codecool.petclinic.repository.JpaVisitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VisitService {

    private final JpaVisitRepository visitRepository;

    @Autowired
    public VisitService(JpaVisitRepository visitRepository) {
        this.visitRepository = visitRepository;
    }



}
