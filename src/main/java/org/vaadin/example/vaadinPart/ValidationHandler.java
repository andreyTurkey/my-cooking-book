package org.vaadin.example.vaadinPart;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.vaadin.example.dto.UserDto;

@Route(value = "/validation")
@PageTitle("Public View")
@AnonymousAllowed
public class ValidationHandler extends Div {


    public ValidationHandler() {

        Binder<UserDto> binder = new Binder<>(UserDto.class);

        TextField emailField = new TextField();
        TextField loginField = new TextField();

        VerticalLayout vl = new VerticalLayout();
        HorizontalLayout hl = new HorizontalLayout();

        TextField phoneField = new TextField();
        phoneField.setValue("Напр.: +79....");
        hl.add(phoneField);
        hl.add(new com.vaadin.flow.component.button.Button("Проверка поля"));
       /* phoneField.addValueChangeListener(event ->
                // Do something with the value
                Notification.*/
        //phoneField.setRequiredIndicatorVisible(true);
        //phoneField.setErrorMessage("Обязательное поле.");


        /*binder.forField(emailField)
                .withValidator(new EmailValidator(
                        "Формат почты указан неверно"))
                .bind(UserDto::getEmail, UserDto::setEmail);


        binder.forField(loginField)
                .withValidator(
                        name -> name.length() >= 3,
                        "Имя должно быть длинее 3 символов")
                .bind(UserDto::getName, UserDto::setName);*/

       /* binder.forField(phoneField)
                    .asRequired("Поле не может быть пустым")
                .bind(UserDto::getPhoneNumber, UserDto::setPhoneNumber);*/


        vl.add(emailField);
        vl.add(loginField);
        this.add(vl);
        this.add(hl);
    }
}
