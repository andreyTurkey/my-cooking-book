package org.vaadin.example.mapper;

import org.vaadin.example.dto.UserDto;
import org.vaadin.example.model.User;

public class UserMapper {

  /*  public static UserDto getUserDto(User user)  {
        UserDto userDto = UserDto.builder()
                .name(user.getName())
                .email(user.getEmail())
                .build();

        return userDto;
    }*/

    public static User getUser(UserDto userDto) {
        User user = new User(
                userDto.getFirstName(),
                userDto.getName(),
                userDto.getPassword(),
                userDto.getEmail(),
                userDto.getPhoneNumber()
        );
        return user;
    }

}
