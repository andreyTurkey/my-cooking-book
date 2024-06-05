package org.vaadin.example.vaadinPart;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.spring.annotation.VaadinSessionScope;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.vaadin.example.UserLogin;
import org.vaadin.example.model.User;
import org.vaadin.example.service.UserService;

import javax.annotation.security.RolesAllowed;

@Route("/confirmRegistration")
@Setter
@Slf4j
@RolesAllowed(value = "USER")
@VaadinSessionScope
public class ConfirmRegistrationPage extends VerticalLayout {

    public ConfirmRegistrationPage(@Autowired UserService userService) {
        setSizeFull();
        setAlignItems(Alignment.CENTER);
        setJustifyContentMode(JustifyContentMode.CENTER);

        String userLogin = UserLogin.getCurrentUserLogin();
        User user = userService.getUserByName(userLogin);

        Label line1 = new Label(String.format("Спасибо за регистрацию!"));
        Label line2 = new Label(String.format("Учетные данные для входа были направлены"));
        Label line3 = new Label(String.format("на указанную почту %s", user.getEmail()));

        add(line1);
        add(line2);
        add(line3);

        Button goOn = new Button("Продолжить");
        goOn.addThemeVariants(ButtonVariant.LUMO_PRIMARY, ButtonVariant.LUMO_SUCCESS);
        goOn.addClickListener(e -> goOn.getUI().ifPresent(ui -> ui.navigate(WorkSpacePage.class)));
        add(goOn);
    }
}
