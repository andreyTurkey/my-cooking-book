package org.vaadin.example.mapper;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnJava;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.vaadin.example.dto.UserDto;
import org.vaadin.example.model.User;

@Slf4j
@Component
public class UserMapper {

    private final PasswordEncoder encoder;

    public UserMapper(@Autowired PasswordEncoder encoder) {
        this.encoder = encoder;
    }

    public User getUser(UserDto userDto) {
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setPassword(encoder.encode(userDto.getPassword()));
        user.setFirstName(userDto.getFirstName());
        user.setUsername(userDto.getName());
        user.setPhoneNumber(userDto.getPhoneNumber());
        user.setEnabled(true);
        return user;
    }
}
