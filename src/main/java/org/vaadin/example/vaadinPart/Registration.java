package org.vaadin.example.vaadinPart;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.binder.ValidationException;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteConfiguration;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.vaadin.example.repository.UserRepository;
import org.vaadin.example.dto.UserDto;
import org.vaadin.example.mapper.UserMapper;
import org.vaadin.example.model.User;

@Route("/register")
@AnonymousAllowed
@Slf4j
public class Registration extends VerticalLayout   {

    private TextField nameField;

    private PasswordField passwordField;
    private EmailField emailField;
    private TextField phoneNum;

    private UserRepository userRepository;

    private UserDto userDto = new UserDto();


    @Autowired
    public Registration(UserRepository userRepository) {
        this.userRepository = userRepository;

        setSizeFull();
        setAlignItems(Alignment.CENTER);
        setJustifyContentMode(JustifyContentMode.CENTER);

        nameField = new TextField("Name");
        add(nameField);

        passwordField = new PasswordField("Password");
        add(passwordField);

        emailField = new EmailField("Email address");
        add(emailField);

        phoneNum = new TextField("Phone number");
        add(phoneNum);

        Button delete = new Button("Delete", event -> {
            clearField();
        });

        Button cancel = new Button("Cancel");

        Button createAccount = new Button("Create account", event -> {
            Binder<UserDto> binder = new Binder<>(UserDto.class);
            binder.forField(nameField).bind(UserDto::getName, UserDto::setName);
            binder.forField(passwordField).bind(UserDto::getPassword, UserDto::setPassword);
            binder.forField(emailField).bind(UserDto :: getEmail, UserDto :: setEmail);
            binder.forField(phoneNum).bind(UserDto :: getPhoneNumber, UserDto :: setPhoneNumber);

            try {
                binder.writeBean(userDto);

                User user = userRepository.save(UserMapper.getUser(userDto));

                log.debug(user + " - ПОЛУЧЕННЫЙ ЮЗЕР");

                String route = RouteConfiguration.forSessionScope()
                        .getUrl(WorkSpacePage.class);
                Anchor link = new Anchor(route, "workSpace");
                add(link);

            } catch (ValidationException e) {
                throw new RuntimeException(e);
            }
        });

        createAccount.addClickListener(e -> createAccount.getUI()
                .ifPresent(ui -> ui.navigate(RegistrationDone.class, userDto.getPassword())));

        HorizontalLayout buttonLayout = new HorizontalLayout(createAccount, delete, cancel);

        buttonLayout.getStyle().set("flex-wrap", "wrap");
        buttonLayout.setJustifyContentMode(JustifyContentMode.CENTER);

        buttonLayout.setPadding(true);
        add(buttonLayout);
    }

    public void clearField() {
        nameField.setValue("");
        passwordField.setValue("");
    }
}
