package org.vaadin.example.service;

import org.springframework.stereotype.Service;
import org.vaadin.example.model.Authority;
import org.vaadin.example.repository.AuthorityRepository;

@Service
public class AuthorityService {

    private final AuthorityRepository authorityRepository;

    public AuthorityService(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }

    public void addNewUserAuthority(Authority authority) {
        authorityRepository.save(authority);
    }
}
