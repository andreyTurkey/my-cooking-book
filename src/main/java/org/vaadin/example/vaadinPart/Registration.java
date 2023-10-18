package org.vaadin.example.vaadinPart;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.binder.ValidationException;
import com.vaadin.flow.data.validator.EmailValidator;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.vaadin.example.dto.UserDto;
import org.vaadin.example.model.Authority;
import org.vaadin.example.service.AuthorityService;
import org.vaadin.example.service.UserService;

@Route("/register")
@AnonymousAllowed
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Registration extends VerticalLayout {

    final TextField nameField;
    final TextField login;
    final PasswordField passwordField;
    final EmailField emailField;
    final TextField phoneNum;
    final PasswordField confirmPassword;
    final UserDto userDto = new UserDto();

    public Registration(UserService userService, AuthorityService authorityService) {

        Binder<UserDto> binderValidation = new Binder<>(UserDto.class);

        setSizeFull();
        setAlignItems(Alignment.CENTER);
        setJustifyContentMode(JustifyContentMode.CENTER);

        nameField = new TextField("Name");
        nameField.setClearButtonVisible(true);
        add(nameField);

        emailField = new EmailField("Email address");
        emailField.setClearButtonVisible(true);
        add(emailField);

        binderValidation.forField(emailField)
                .withValidator(o -> !userService.isEmailExist(o),
                        "Пользователь с указанной почтой уже зарегистрирован. Укажите другую почту.")
                .withValidator(new EmailValidator(
                        "Формат почты указан неверно. Проверьте правильность написания почтового адреса."))
                .bind(UserDto::getEmail, UserDto::setEmail);

        phoneNum = new TextField("Phone number");
        phoneNum.setClearButtonVisible(true);
        phoneNum.setHelperText("Формат: +7(925)081-60-36");
        add(phoneNum);

        login = new TextField("Login");
        login.setRequiredIndicatorVisible(true);
        login.setClearButtonVisible(true);
        login.setMinLength(3);
        login.setHelperText("Обязательное поле");
        add(login);


        binderValidation.forField(login)
                .withValidator(o -> !userService.isLoginExist(o),
                        "Логин занят. Придумайте другой.")
                .bind(UserDto::getName, UserDto::setName);

        passwordField = new PasswordField("Password");
        passwordField.setClearButtonVisible(true);
        add(passwordField);

        confirmPassword = new PasswordField("Confirm the password");
        confirmPassword.setClearButtonVisible(true);
        add(confirmPassword);

        Button clear = new Button("Clear", event -> {
            clearField();
        });
        clear.addThemeVariants(ButtonVariant.LUMO_CONTRAST);

        Button cancel = new Button("Cancel");
        cancel.addThemeVariants(ButtonVariant.LUMO_PRIMARY, ButtonVariant.LUMO_ERROR);
        cancel.addClickListener(e -> cancel.getUI()
                .ifPresent(ui -> ui.navigate(MainPage.class)));


        Button createAccount = new Button("Create account", event -> {
            Binder<UserDto> binder = new Binder<>(UserDto.class);
            binder.forField(nameField).bind(UserDto::getFirstName, UserDto::setFirstName);
            binder.forField(passwordField).bind(UserDto::getPassword, UserDto::setPassword);
            binder.forField(confirmPassword).bind(UserDto::getConfirmPassword, UserDto::setConfirmPassword);
            binder.forField(emailField).bind(UserDto::getEmail, UserDto::setEmail);

            binder.forField(login).bind(UserDto::getName, UserDto::setName);
            binder.forField(phoneNum).bind(UserDto::getPhoneNumber, UserDto::setPhoneNumber);

            try {
                binder.writeBean(userDto);

                checkRegistration(userDto);
                log.error("ПОЛУЧЕННЫЙ ЮЗЕР - " + userDto);
                userService.addNewUser(userDto);
                if (userDto != null) {
                    authorityService.addNewUserAuthority(new Authority(userDto.getName(), "write"));
                }

            } catch (ValidationException e) {
                throw new RuntimeException(e);
            }
        });
        createAccount.addThemeVariants(ButtonVariant.LUMO_PRIMARY, ButtonVariant.LUMO_SUCCESS);

        createAccount.addClickListener(e -> createAccount.getUI()
                .ifPresent(ui -> ui.navigate(WorkSpacePage.class)));

        HorizontalLayout buttonLayout = new HorizontalLayout(createAccount, clear, cancel);

        buttonLayout.setJustifyContentMode(JustifyContentMode.CENTER);

        buttonLayout.setPadding(true);
        add(buttonLayout);
    }

    public void clearField() {
        passwordField.setValue("");
        confirmPassword.setValue("");
        emailField.setValue("");
        phoneNum.setValue("");
        nameField.setValue("");
        passwordField.setValue("");
    }

    private void checkRegistration(UserDto userDto) {
        final String PASSWORD_MISTAKE = "Пароли не совпадают. Проверьте правильность ввода.";
        final String LOGIN_MISTAKE = "Обязательное поле login пустое. Проверьте правильность ввода.";

        if (!userDto.getPassword().equals(userDto.getConfirmPassword()) && userDto.getName().isBlank()) {
            getUI().ifPresent(ui -> ui.navigate(MistakePage.class, (PASSWORD_MISTAKE + " " + LOGIN_MISTAKE)));
        }

        if (userDto.getPassword().isBlank() && userDto.getName().isBlank()) {
            getUI().ifPresent(ui -> ui.navigate(MistakePage.class, (PASSWORD_MISTAKE + " " + LOGIN_MISTAKE)));
        }

        if (!userDto.getPassword().equals(userDto.getConfirmPassword())) {
            getUI().ifPresent(ui -> ui.navigate(MistakePage.class,
                    PASSWORD_MISTAKE));
        }

        if (userDto.getName().isBlank()) {
            getUI().ifPresent(ui -> ui.navigate(MistakePage.class,
                    LOGIN_MISTAKE));
        }
    }
}
