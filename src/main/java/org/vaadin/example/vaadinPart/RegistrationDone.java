package org.vaadin.example.vaadinPart;

import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.Route;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

@Route("to/show")
@Slf4j
public class RegistrationDone extends VerticalLayout implements HasUrlParameter<String> {

    //private final UserRepository userRepository;

    /*@Autowired
    public RegistrationDone(UserRepository userRepository) {
        //this.userRepository = userRepository;
        setSizeFull();
        setAlignItems(Alignment.CENTER);
        setJustifyContentMode(JustifyContentMode.CENTER);
    }*/

    @Override
    public void setParameter(BeforeEvent beforeEvent, String s) {
        //UserDepricated user = userRepository.findByEmail(s);
        //String thankYou = String.format("Спасибо %s, что зарегистрировались! Теперь мы знакомы!\n", user.getName());
        //Text hello = new Text(thankYou);
        //add(hello);

        Text ready = new Text("Приступим?");
        add(ready);

        Button ok = new Button("OK");
        //ok.addClickListener(e -> ok.getUI()
        //        .ifPresent(ui -> ui.navigate(MainPage.class, user.getEmail())));
        add(ok);
    }
}


