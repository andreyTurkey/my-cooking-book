package org.vaadin.example.vaadinPart;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.spring.annotation.SpringComponent;
import com.vaadin.flow.spring.annotation.UIScope;
import com.vaadin.flow.spring.annotation.VaadinSessionScope;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.vaadin.example.UserLogin;
import org.vaadin.example.dto.RecipeDto;
import org.vaadin.example.mapper.RecipeMapper;
import org.vaadin.example.repository.RecipeRepository;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import java.util.List;
import java.util.stream.Collectors;

@Route("/allUserRecipe")
//@PermitAll
@RolesAllowed(value = "USER")
@Setter
@Slf4j
@VaadinSessionScope
public class AllUserRecipe extends VerticalLayout {

    private final RecipeRepository recipeRepository;
    private Grid<RecipeDto> recipeGrid;
    private List<RecipeDto> recipeDtos;
    private static Div hint;

    public AllUserRecipe(@Autowired RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;

        recipeDtos = recipeRepository.findAllByUserLogin(UserLogin.getCurrentUserLogin())
                .stream()
                .map(RecipeMapper::getRecipeDtoProductEmpty)
                .collect(Collectors.toList());
        this.setupGrid();

        HorizontalLayout horizontalLayout = new HorizontalLayout(addNewRecipeButton(), returnToMainPage());
        add(horizontalLayout);
    }

    public void setupGrid() {
        recipeGrid = new Grid<>(RecipeDto.class, false);
        recipeGrid.setWidth("50%");
        recipeGrid.setAllRowsVisible(true);
        recipeGrid.addColumn(RecipeDto::getDateOfCreating).setHeader("Дата создания")
                        .setWidth("10em").setFlexGrow(0);
        recipeGrid.addColumn(RecipeDto::getName).setHeader("Название").setAutoWidth(true);

        recipeGrid.addColumn(
                new ComponentRenderer<>(Button::new, (button, recipeDto) -> {
                    button.addThemeVariants(ButtonVariant.LUMO_ICON,
                            ButtonVariant.LUMO_ERROR,
                            ButtonVariant.LUMO_TERTIARY);
                    button.addClickListener(e -> this.removeInvitation(recipeDto));
                    button.setIcon(new Icon(VaadinIcon.CHECK));
                })).setHeader("Изменить")
                .setWidth("7em").setFlexGrow(0);

        recipeGrid.addColumn(
                new ComponentRenderer<>(Button::new, (button, recipeDto) -> {
                    button.addThemeVariants(ButtonVariant.LUMO_ICON,
                            ButtonVariant.LUMO_ERROR,
                            ButtonVariant.LUMO_TERTIARY);
                    button.addClickListener(e -> this.removeInvitation(recipeDto));
                    button.setIcon(new Icon(VaadinIcon.TRASH));
                })).setHeader("Удалить")
                .setWidth("7em").setFlexGrow(0);

        recipeGrid.setItems(recipeDtos);

        hint = new Div();
        hint.getStyle().set("padding", "var(--lumo-size-l)")
                .set("text-align", "center").set("font-style", "italic")
                .set("color", "var(--lumo-contrast-70pct)");

        add(hint, recipeGrid);
    }

    private void removeInvitation(RecipeDto recipeDto) {
        log.debug("Кол-во рецептов до удаления = " + recipeDtos.size());
        if (recipeDto == null)
            return;
        recipeDtos.remove(recipeDto);
        recipeRepository.deleteById(recipeDto.getId());
        this.refreshGrid();
        log.debug("Кол-во рецептов после удаления = " + recipeDtos.size());
    }

    private void refreshGrid() {
        if (recipeDtos.size() > 0) {
            recipeGrid.setVisible(true);
            hint.setVisible(false);
            recipeGrid.getDataProvider().refreshAll();
        } else {
            recipeGrid.setVisible(false);
            hint.setVisible(true);
        }
    }

    private Button addNewRecipeButton() {
        Button addNewRecipe = new Button("Добавить новый рецепт");
        addNewRecipe.addClickListener(e -> addNewRecipe.getUI()
                .ifPresent(ui -> ui.navigate(NewRecipeForm.class)));
        addNewRecipe.addThemeVariants(ButtonVariant.LUMO_PRIMARY, ButtonVariant.LUMO_SUCCESS);
        return addNewRecipe;
    }

    private Button returnToMainPage() {
        Button returnToMainPage = new Button("На главную страницу");
        returnToMainPage.addClickListener(e -> returnToMainPage.getUI()
                .ifPresent(ui -> ui.navigate(WorkSpacePage.class)));
        //returnToMainPage.addThemeVariants(ButtonVariant.LUMO_PRIMARY, ButtonVariant.LUMO_SUCCESS);
        return  returnToMainPage;
    }
}
