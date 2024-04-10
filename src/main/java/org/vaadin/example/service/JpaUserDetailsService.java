package org.vaadin.example.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.vaadin.example.model.CustomUserDetails;
import org.vaadin.example.model.User;
import org.vaadin.example.repository.UserRepository;

import java.util.function.Supplier;

@Primary
@Service
@Slf4j
public class JpaUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public CustomUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Supplier<UsernameNotFoundException> s = () -> new UsernameNotFoundException("Пользователь не найден");

        User user = userRepository.findUsersByUsername(username)
                .orElseThrow(s);
        log.debug("Пользователь из базы: " + user);
        return new CustomUserDetails(user);
    }
}
