package org.vaadin.example.dto;

import lombok.Builder;
import lombok.Data;
import org.vaadin.example.model.product.Product;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class RecipeDto {

    private Long id;
    private String name;
    private String description;
    private List<Product> products;
    private String duration;
    private Boolean isPublic;
    private LocalDate dateOfCreating;
    private String userLogin;
    private Boolean isModerated;
}

