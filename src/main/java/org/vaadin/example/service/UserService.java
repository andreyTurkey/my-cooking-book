package org.vaadin.example.service;

import org.springframework.stereotype.Service;
import org.vaadin.example.dto.UserDto;
import org.vaadin.example.mapper.UserMapper;
import org.vaadin.example.repository.UserRepository;
import org.vaadin.example.model.User;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User addNewUser(UserDto userDto) {
       return repo.save(UserMapper.getUser(userDto));
    }

    public boolean isLoginExist(String login) {
        User user = repo.findByUsername(login);
        if (user != null) {
            return true;
        } else {
            return false;
        }
    }

    public boolean isEmailExist(String email) {
        User user = repo.findByEmail(email);
        if (user != null) {
            return true;
        } else {
            return false;
        }
    }
}
