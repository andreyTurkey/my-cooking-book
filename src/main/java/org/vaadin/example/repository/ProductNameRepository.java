package org.vaadin.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vaadin.example.model.product.ProductName;

public interface ProductNameRepository extends JpaRepository<ProductName, Integer>{
}
