package org.vaadin.example.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDto {

    //@NotBlank
    private String firstName;

    //@NotBlank
    private String name;

    //@NotBlank
    private String password;

    //@NotBlank
    private String confirmPassword;

    //@NotBlank
    private String email;

    private String phoneNumber;
}
