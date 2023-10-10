package org.vaadin.example.VaadinSecurity;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;

import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.security.PermitAll;

@Route(value = "logout")
@PermitAll
public class MainLayout extends VerticalLayout {

    private SecurityService securityService;

    public MainLayout(@Autowired SecurityService securityService) {
        this.securityService = securityService;

        setSizeFull();
        setAlignItems(Alignment.CENTER);
        setJustifyContentMode(JustifyContentMode.CENTER);

        H1 logo = new H1("Книга моих рецептов");
        logo.addClassName("logo");

        VerticalLayout header;
        if (securityService.getAuthenticatedUser() != null) {
            Button logout = new Button("Выйти", click ->
                    securityService.logout());
            header = new VerticalLayout(logo, logout);
        } else {
            header = new VerticalLayout(logo);
        }

        header.setAlignItems(Alignment.CENTER);
        add(header);
    }
}