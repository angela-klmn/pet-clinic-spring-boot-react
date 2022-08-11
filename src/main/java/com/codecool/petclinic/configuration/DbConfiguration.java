package com.codecool.petclinic.configuration;

import com.codecool.petclinic.repository.PetDao;
import com.codecool.petclinic.repository.PetDaoInMemory;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class DbConfiguration {

    @Bean
    @Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
    public PetDao getPetDao() {
        return new PetDaoInMemory();
    }
}
