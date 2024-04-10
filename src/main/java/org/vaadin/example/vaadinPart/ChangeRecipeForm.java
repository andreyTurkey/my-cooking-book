package org.vaadin.example.vaadinPart;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.vaadin.example.dto.RecipeDto;
import org.vaadin.example.repository.ProductMeasureRepository;
import org.vaadin.example.repository.ProductNameRepository;
import org.vaadin.example.repository.RecipeRepository;

import javax.annotation.security.PermitAll;

@Route("/changeRecipeForm")
//@PermitAll
@Setter
@Slf4j
//@AnonymousAllowed
public class ChangeRecipeForm extends NewRecipeForm implements HasUrlParameter<String> {

    private Grid<RecipeDto> recipeDtoGrid;
    private Div hint;

    public ChangeRecipeForm(
            @Autowired ProductNameRepository productNameRepository,
            @Autowired ProductMeasureRepository productMeasureRepository,
            @Autowired RecipeRepository recipeRepository
    ) {
        super(productNameRepository, productMeasureRepository, recipeRepository);
        setupPrintCurrentUser();
    }

    @Override
    public void setParameter(BeforeEvent event, String parameter) {
        System.out.println(String.format("Hello, %s!", parameter));
    }

    private void setupPrintCurrentUser() {
        System.out.println();
    }

    //@Override
    public void setupGrid() {
        recipeDtoGrid = new Grid<>(RecipeDto.class, false);
        recipeDtoGrid.setWidth("40%");
        recipeDtoGrid.setAllRowsVisible(true);
        recipeDtoGrid.addColumn(RecipeDto::getDateOfCreating).setHeader("Дата создания");
        recipeDtoGrid.addColumn(RecipeDto::getName).setHeader("Название");
        recipeDtoGrid.addColumn(RecipeDto::getId).setHeader("ID").setVisible(false);

        recipeDtoGrid.addColumn( // кнопка изменения
                new ComponentRenderer<>(Button::new, (button, recipe) -> {
                    button.addThemeVariants(ButtonVariant.LUMO_ICON,
                            ButtonVariant.LUMO_ERROR,
                            ButtonVariant.LUMO_TERTIARY);
                    //button.addClickListener(e -> this.removeInvitation(product));
                    //button.addClickListener(e -> );
                    button.setIcon(new Icon(VaadinIcon.TRASH));
                })).setHeader("");

        //recipeDtoGrid.setItems(addedProduct); // берет рецепты из базы

        hint = new Div();
        hint.getStyle().set("padding", "var(--lumo-size-l)")
                .set("text-align", "center").set("font-style", "italic")
                .set("color", "var(--lumo-contrast-70pct)");

        //add(hint, recipeDtoGrid);
    }
}
