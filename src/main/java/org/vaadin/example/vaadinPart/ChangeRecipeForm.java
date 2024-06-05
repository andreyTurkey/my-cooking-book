package org.vaadin.example.vaadinPart;

import com.vaadin.flow.component.Unit;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.binder.ValidationException;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.vaadin.example.UserLogin;
import org.vaadin.example.dto.RecipeDto;
import org.vaadin.example.mapper.RecipeMapper;
import org.vaadin.example.model.product.Product;
import org.vaadin.example.model.product.ProductMeasure;
import org.vaadin.example.model.product.ProductName;
import org.vaadin.example.model.product.Recipe;
import org.vaadin.example.repository.ProductMeasureRepository;
import org.vaadin.example.repository.ProductNameRepository;
import org.vaadin.example.repository.RecipeRepository;

import javax.annotation.security.PermitAll;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Route("/changeRecipeForm")
@PermitAll
@Setter
@Slf4j
@AnonymousAllowed
//@VaadinSessionScope
//@Component
public class ChangeRecipeForm extends VerticalLayout implements HasUrlParameter<String> {

    private final ProductNameRepository productNameRepository;
    private final ProductMeasureRepository productMeasureRepository;
    private final RecipeRepository recipeRepository;

    private final RecipeDto recipeDto = RecipeDto.builder().build();
    private Grid<Product> productGrid;
    private static final List<Product> addedProduct = new ArrayList<>();
    private static Div hint;
    private final ComboBox<ProductName> comboBoxProductName = new ComboBox<>("Продукты");
    private final ComboBox<ProductMeasure> comboBoxMeasure = new ComboBox<>("Ед. изм");
    private final TextField quantity = new TextField("Кол-во");
    private TextField nameField;
    private TextArea descriptionField;
    private TextField durationField;
    private Checkbox checkboxPublicPermission;
    private Recipe recipeFromDb;
    private Long recipeId;

    public ChangeRecipeForm(
            @Autowired ProductNameRepository productNameRepository,
            @Autowired ProductMeasureRepository productMeasureRepository,
            @Autowired RecipeRepository recipeRepository
    ) {
        this.productNameRepository = productNameRepository;
        this.productMeasureRepository = productMeasureRepository;
        this.recipeRepository = recipeRepository;
        this.setupNameAndDescription();
        this.addProductLayout();
        this.setupGrid();
        this.setupDuration();
        this.setupPublicPermission();
        this.setupRecordRecipe();
    }

    @Override
    public void setParameter(BeforeEvent beforeEvent, String s) {
        recipeId = Long.parseLong(s);
        recipeFromDb = recipeRepository.getReferenceById(recipeId);
    }

    private void setupPublicPermission() {
        checkboxPublicPermission = new Checkbox();
        checkboxPublicPermission.setLabel("Сделать рецепт публичным (другие пользвователи смогут видеть ваш рецепт)");
        checkboxPublicPermission.setValue(false);
        add(checkboxPublicPermission);
    }

    private void setupNameAndDescription() {
        nameField = new TextField("Название");
        nameField.setRequired(true);
        nameField.setAutofocus(true);
        add(nameField);

        descriptionField = new TextArea("Подробное описание");
        descriptionField.setWidth(600, Unit.PIXELS);

        descriptionField.setRequired(true);
        descriptionField.setValue(recipeFromDb.getDescription());
        add(descriptionField);

        Label photoUpload = new Label("Загрузить фото");
        photoUpload.getStyle().set("font-weight", "500");
    }

    private void setupRecordRecipe() {
        Button createRecipe = new Button("Записать рецепт", event -> {
            Binder<RecipeDto> binder = new Binder<>(RecipeDto.class);
            binder.forField(nameField).bind(RecipeDto::getName, RecipeDto::setName);
            binder.forField(descriptionField).bind(RecipeDto::getDescription, RecipeDto::setDescription);
            binder.forField(durationField).bind(RecipeDto::getDuration, RecipeDto::setDuration);
            binder.forField(checkboxPublicPermission).bind(RecipeDto::getIsPublic, RecipeDto::setIsPublic);
            try {
                binder.writeBean(recipeDto);

                recipeDto.setProducts(addedProduct);
                recipeDto.setDateOfCreating(LocalDate.now());

                recipeFromDb = recipeRepository.save(RecipeMapper.getRecipe(this.checkRecipeDto(recipeDto)));
            } catch (ValidationException e) {
                throw new RuntimeException(e);
            }
        });

        createRecipe.addThemeVariants(ButtonVariant.LUMO_PRIMARY, ButtonVariant.LUMO_SUCCESS);

        createRecipe.addClickListener(e -> createRecipe.getUI()
                .ifPresent(ui -> ui.navigate(AllUserRecipe.class)));

        add(createRecipe);
    }

    private void addProductLayout() {

        comboBoxProductName.setItems(productNameRepository.findAll());
        comboBoxProductName.setItemLabelGenerator(ProductName::getName);

        comboBoxMeasure.setWidth("10%");
        comboBoxMeasure.setItems(productMeasureRepository.findAll());
        comboBoxMeasure.setItemLabelGenerator(ProductMeasure::getName);

        quantity.setHelperText("Допускаются только цифры");
        quantity.setWidth("10%");

        Button addProduct = new Button("+");
        addProduct.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

        addProduct.getElement().getStyle().set("margin-top", "37px");

        addProductButtonLogic(addProduct);

        HorizontalLayout layout = new HorizontalLayout(
                comboBoxProductName,
                comboBoxMeasure,
                quantity,
                addProduct);

        add(layout);
    }

    private void addProductButtonLogic(Button addProduct) {
        addProduct.addClickListener(e -> {
            this.addProduct(
                    comboBoxProductName.getValue(),
                    comboBoxMeasure.getValue(),
                    Double.parseDouble(String.valueOf(quantity.getValue())));

            comboBoxProductName.setValue(null);

            comboBoxMeasure.setValue(null);

            quantity.clear();
        });
    }

    private void addProduct(ProductName productName, ProductMeasure productMeasure, Double productQuantity) {
        if (productName == null || productMeasure == null || productQuantity == null) {
            return;
        }
        addedProduct.add(
                Product.builder()
                        .productName(productName.getName())
                        .productMeasure(productMeasure.getName())
                        .productQuantity(productQuantity)
                        .build());
        this.refreshGrid();
    }

    public void setupGrid() {
        productGrid = new Grid<>(Product.class, false);
        productGrid.setWidth("40%");
        productGrid.setAllRowsVisible(true);
        productGrid.addColumn(Product::getProductName).setHeader("Продукт");
        productGrid.addColumn(Product::getProductMeasure).setHeader("Ед. изм");
        productGrid.addColumn(Product::getProductQuantity).setHeader("Кол-во");

        productGrid.addColumn(
                new ComponentRenderer<>(Button::new, (button, product) -> {
                    button.addThemeVariants(ButtonVariant.LUMO_ICON,
                            ButtonVariant.LUMO_ERROR,
                            ButtonVariant.LUMO_TERTIARY);
                    button.addClickListener(e -> this.removeInvitation(product));
                    button.setIcon(new Icon(VaadinIcon.TRASH));
                })).setHeader("Удалить");

        productGrid.setItems(addedProduct);

        hint = new Div();
        hint.getStyle().set("padding", "var(--lumo-size-l)")
                .set("text-align", "center").set("font-style", "italic")
                .set("color", "var(--lumo-contrast-70pct)");

        add(hint, productGrid);
    }

    private void removeInvitation(Product product) {
        if (product == null)
            return;
        addedProduct.remove(product);
        this.refreshGrid();
    }

    private void refreshGrid() {
        if (addedProduct.size() > 0) {
            productGrid.setVisible(true);
            hint.setVisible(false);
            productGrid.getDataProvider().refreshAll();
        } else {
            productGrid.setVisible(false);
            hint.setVisible(true);
        }
    }

    private void setupDuration() {
        durationField = new TextField("Время готовки");
        durationField.setMaxLength(3);
        durationField.setWidth(150, Unit.PIXELS);
        durationField.setHelperText("в минутах");
        add(durationField);
    }

    private RecipeDto checkRecipeDto(RecipeDto recipeDto) {
        if (recipeDto.getDuration().equals("")) {
            recipeDto.setDuration("0");
        }
        recipeDto.setUserLogin(UserLogin.getCurrentUserLogin());
        return recipeDto;
    }
}
