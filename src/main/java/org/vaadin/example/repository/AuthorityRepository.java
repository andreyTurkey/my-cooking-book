package org.vaadin.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vaadin.example.model.Authority;
import org.vaadin.example.model.User;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
}
