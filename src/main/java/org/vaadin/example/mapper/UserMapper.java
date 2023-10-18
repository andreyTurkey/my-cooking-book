package org.vaadin.example.mapper;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.vaadin.example.dto.UserDto;
import org.vaadin.example.model.User;

public class UserMapper {

    public static User getUser(UserDto userDto) {
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(userDto.getPassword()));
        //user.setPassword(userDto.getPassword());
        user.setFirstName(userDto.getFirstName());
        user.setUsername(userDto.getName());
        user.setPhoneNumber(userDto.getPhoneNumber());
        return user;
    }
}
