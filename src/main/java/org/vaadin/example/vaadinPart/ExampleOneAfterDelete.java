package org.vaadin.example.vaadinPart;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;

@Route("1")
@AnonymousAllowed
public class ExampleOneAfterDelete extends Div {

    public ExampleOneAfterDelete() {
        VerticalLayout layout = new VerticalLayout();
        layout.add(new Button("Button 1"));
        layout.add(new Button("Button 2"));
        layout.add(new Button("Button 3"));
        layout.add(new Button("Button 4"));

        this.setClassName("basic-layouts-example");

        this.add(layout);
    }

}
