package org.vaadin.example.repository;

import org.aspectj.apache.bcel.classfile.Module;
import org.springframework.data.jpa.repository.JpaRepository;
import org.vaadin.example.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findUserByUsername(String userName);

    User findByEmail(String email);
}
