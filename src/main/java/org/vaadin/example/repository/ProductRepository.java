package org.vaadin.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vaadin.example.model.product.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
