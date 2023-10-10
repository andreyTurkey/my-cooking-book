package org.vaadin.example.vaadinPart;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.vaadin.example.VaadinSecurity.MainLayout;
import org.vaadin.example.vaadinPart.RegistrationDone;

import javax.annotation.security.RolesAllowed;

@Route("/workSpace")
@Setter
@Slf4j
@RolesAllowed(value = "USER")
public class WorkSpacePage extends VerticalLayout  {

    private String userEmail;

    public WorkSpacePage() {

        setSizeFull();
        setAlignItems(Alignment.CENTER);
        setJustifyContentMode(JustifyContentMode.CENTER);

        createButtons();
    }

    private void createButtons() {
        Button newRecipe = new Button("Новый рецепт", new Icon(VaadinIcon.DASHBOARD));
        newRecipe.addClickListener(e -> newRecipe.getUI()
                .ifPresent(ui -> ui.navigate(RegistrationDone.class, userEmail)));

        Button myRecipes = new Button("Мои рецепты", new Icon(VaadinIcon.RECORDS));
        myRecipes.addClickListener(e -> myRecipes.getUI()
                .ifPresent(ui -> ui.navigate(RegistrationDone.class, userEmail)));

        Button notes = new Button("Новый рецепт", new Icon(VaadinIcon.NOTEBOOK));
        notes.addClickListener(e -> notes.getUI()
                .ifPresent(ui -> ui.navigate(RegistrationDone.class, userEmail)));

        Button buyProduct = new Button("Купить продукты", new Icon(VaadinIcon.CART));
        buyProduct.addClickListener(e -> buyProduct.getUI()
                .ifPresent(ui -> ui.navigate(RegistrationDone.class, userEmail)));

        Button logout = new Button("Выйти", new Icon(VaadinIcon.CART));
        logout.addClickListener(e -> logout.getUI()
                .ifPresent(ui -> ui.navigate(MainLayout.class)));


        VerticalLayout verticalLayout = new VerticalLayout(newRecipe, myRecipes, notes, buyProduct, logout);
        verticalLayout.setAlignItems(Alignment.CENTER);
        add(verticalLayout);
    }
}
