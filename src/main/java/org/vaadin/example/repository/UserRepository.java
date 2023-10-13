package org.vaadin.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vaadin.example.dto.UserDto;
import org.vaadin.example.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String userName);

    User findByEmail(String email);
}
