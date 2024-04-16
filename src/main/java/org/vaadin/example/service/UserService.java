package org.vaadin.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.vaadin.example.dto.UserDto;
import org.vaadin.example.mapper.UserMapper;
import org.vaadin.example.repository.UserRepository;
import org.vaadin.example.model.User;

import java.util.Optional;
import java.util.function.Supplier;

@Service
public class UserService {

    private final UserRepository repo;
    private final UserMapper userMapper;

    @Autowired
    public UserService(UserRepository repo, UserMapper userMapper) {
        this.userMapper = userMapper;
        this.repo = repo;
    }

    public User addNewUser(UserDto userDto) {

       return repo.save(userMapper.getUser(userDto));
    }

    public boolean isLoginExist(String login) {
        Optional user = repo.findUserByUsername(login);
        if (user.isPresent()) {
            return true;
        } else {
            return false;
        }
    }

    public User getUserByName(String userName) {
        Supplier<UsernameNotFoundException> s = () -> new UsernameNotFoundException("Пользователь не найден");
        User user = repo.findUserByUsername(userName)
                .orElseThrow(s);
        return user;
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
