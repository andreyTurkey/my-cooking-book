package org.vaadin.example.model;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import javax.annotation.security.PermitAll;
import java.util.ArrayList;
import java.util.List;

@Route("/grid-basic")
@PermitAll
@Setter
@Slf4j
@AnonymousAllowed
public class GridBasicForTest extends Div {

    private List<PersonForTest> people = List.of(
            new PersonForTest("Иван", "Петрович", "a@mail.ru", "doctor"),
            new PersonForTest("Stepan", "Ivanich", "bb@mail.ru", "plumber"));


    private static final List<PersonForTest> invitedPeople = new ArrayList<>();

    private static Grid<PersonForTest> grid;
    private static Div hint;

    public GridBasicForTest() {
        this.setupInvitationForm();
        this.setupGrid();
        this.refreshGrid();
    }

    private void setupInvitationForm() {

        ComboBox<PersonForTest> comboBox = new ComboBox<>();
        comboBox.setItems(people);
        comboBox.setItemLabelGenerator(PersonForTest::getFirstName);

        Button button = new Button("Send invite");
        button.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        button.addClickListener(e -> {
            sendInvitation(comboBox.getValue());
            comboBox.setValue(null);
        });

        HorizontalLayout layout = new HorizontalLayout(comboBox, button);
        layout.setFlexGrow(1, comboBox);

        add(layout);
    }

    private void setupGrid() {
        grid = new Grid<>(PersonForTest.class, false);
        grid.setAllRowsVisible(true);
        grid.addColumn(PersonForTest::getFirstName).setHeader("Name");
        grid.addColumn(PersonForTest::getEmail).setHeader("Email");

        grid.addColumn(
                new ComponentRenderer<>(Button::new, (button, person) -> {
                    button.addThemeVariants(ButtonVariant.LUMO_ICON,
                            ButtonVariant.LUMO_ERROR,
                            ButtonVariant.LUMO_TERTIARY);
                    button.addClickListener(e -> this.removeInvitation(person));
                    button.setIcon(new Icon(VaadinIcon.TRASH));
                })).setHeader("Manage");

        grid.setItems(invitedPeople);

        hint = new Div();
        hint.setText("No invitation has been sent");
        hint.getStyle().set("padding", "var(--lumo-size-l)")
                .set("text-align", "center").set("font-style", "italic")
                .set("color", "var(--lumo-contrast-70pct)");

        add(hint, grid);
    }

    private void refreshGrid() {
        if (invitedPeople.size() > 0) {
            grid.setVisible(true);
            hint.setVisible(false);
            grid.getDataProvider().refreshAll();
        } else {
            grid.setVisible(false);
            hint.setVisible(true);
        }
    }

    private void sendInvitation(PersonForTest person) {
        if (person == null || invitedPeople.contains(person))
            return;
        invitedPeople.add(person);
        this.refreshGrid();
    }

    private void removeInvitation(PersonForTest person) {
        if (person == null)
            return;
        invitedPeople.remove(person);
        this.refreshGrid();
    }

}

