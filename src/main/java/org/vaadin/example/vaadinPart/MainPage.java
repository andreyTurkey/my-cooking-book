package org.vaadin.example.vaadinPart;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import lombok.Setter;

@Route(value = "")
@PageTitle("Public View")
@AnonymousAllowed
//@CssImport("./styles/shared-styles.css") // на строке все зависает
//@CssImport(value = "./styles/vaadin-text-field-styles.css", themeFor = "vaadin-text-field") // на строке все зависает
//@CssImport("./styles/main-page.css") // на строке все зависает
@Setter
public class MainPage extends VerticalLayout /*implements HasUrlParameter<String>*/ {

    private String userEmail;

    public MainPage() {

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
        comeIn.addClickListener(e -> comeIn.getUI()
                .ifPresent(ui -> ui.navigate("/workSpace")));

        Button registration = new Button("Регистрация");
        registration.addClickListener(e -> registration.getUI()
                .ifPresent(ui -> ui.navigate(Registration.class)));

        VerticalLayout verticalLayout = new VerticalLayout(comeIn, registration);
        verticalLayout.setAlignItems(Alignment.CENTER);
        add(verticalLayout);
    }

   /* @Override
    public void setParameter(BeforeEvent beforeEvent, String s) {
        setUserEmail(s);
    }*/
}
