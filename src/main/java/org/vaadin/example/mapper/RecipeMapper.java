package org.vaadin.example.mapper;

import org.vaadin.example.dto.RecipeDto;
import org.vaadin.example.model.product.Recipe;

import java.time.Duration;
import java.util.ArrayList;

public class RecipeMapper {

    public static Recipe getRecipe(RecipeDto recipeDto) {
        return Recipe.builder()
                .name(recipeDto.getName())
                .description(recipeDto.getDescription())
                .duration(Duration.ofMinutes(Integer.parseInt(recipeDto.getDuration())))
                .dateOfCreating(recipeDto.getDateOfCreating())
                .products(recipeDto.getProducts())
                .userLogin(recipeDto.getUserLogin())
                .isModerated(recipeDto.getIsModerated())
                .build();
    }

    public static RecipeDto getRecipeDtoProductEmpty(Recipe recipe) {
        return RecipeDto.builder()
                .id(recipe.getId())
                .name(recipe.getName())
                .description(recipe.getDescription())
                .duration(String.valueOf(recipe.getDuration()))
                .dateOfCreating(recipe.getDateOfCreating())
                .products(new ArrayList<>())
                .userLogin(recipe.getUserLogin())
                .isModerated(recipe.getIsModerated())
                .build();
    }
}
