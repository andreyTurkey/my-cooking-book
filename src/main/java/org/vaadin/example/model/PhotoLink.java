package org.vaadin.example.model;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Table(name = "photo_link", schema = "public")
public class PhotoLink {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "photo_link_id")
    private Long id;

    @Column(name = "recipe_id")
    private Long recipeId;

    @Column(name = "link")
    private  String link;
}
