package org.vaadin.example.vaadinPart;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.vaadin.example.UserLogin;
import org.vaadin.example.VaadinSecurity.LogoutPage;
import org.vaadin.example.VaadinSecurity.SecurityService;

@Route(value = "")
@PageTitle("Public View")
@AnonymousAllowed
@Setter
@Slf4j
public class MainPage extends VerticalLayout {

    public MainPage(@Autowired SecurityService securityService) {
        //this.getElement().getStyle().set("background", "url(\"Pizza_920x1080.jpg\")");
        /*this.getElement().getStyle().set("background", "url(\"Pizza.png\")");
        this.getElement().getStyle().set("background-size", "100vw 120vh");
        this.getElement().getStyle().set("filter", "opacity(100%)");*/

        setSizeFull();
        setAlignItems(Alignment.CENTER);
        setJustifyContentMode(JustifyContentMode.CENTER);

        H1 logo = new H1("Книга моих рецептов");
        logo.addClassName("logo");

        add(logo);
        createButtons();
    }



    private void createButtons() {

        Button comeIn = new Button("Войти");
        comeIn.setClassName("button");
        comeIn.addClickListener(e -> comeIn.getUI()
                .ifPresent(ui -> ui.navigate("/workSpace")));

        Button registration = new Button("Регистрация");
        registration.setClassName("button");
        registration.addClickListener(e -> registration.getUI()
                .ifPresent(ui -> ui.navigate(RegistrationForm.class)));

        Button withoutRegistrationComeIn = new Button("Войти без регистрации");
        withoutRegistrationComeIn.setClassName("button");
        registration.addClickListener(e -> registration.getUI()
                .ifPresent(ui -> ui.navigate(PublicRecipesPage.class)));

        VerticalLayout verticalLayout = new VerticalLayout(comeIn, registration, withoutRegistrationComeIn);
        verticalLayout.setAlignItems(Alignment.CENTER);
        add(verticalLayout);
    }
}
