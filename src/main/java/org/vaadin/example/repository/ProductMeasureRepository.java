package org.vaadin.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vaadin.example.model.product.ProductMeasure;
import org.vaadin.example.model.product.ProductName;

public interface ProductMeasureRepository extends JpaRepository<ProductMeasure, Integer> {
}
