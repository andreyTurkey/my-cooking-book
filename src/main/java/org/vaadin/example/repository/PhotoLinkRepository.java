package org.vaadin.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vaadin.example.model.PhotoLink;

import java.util.List;

public interface PhotoLinkRepository extends JpaRepository<PhotoLink, Long> {

    void removeAllByRecipeId(Long recipeId);
}
