package org.vaadin.example.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.vaadin.example.model.product.Product;
import org.vaadin.example.repository.ProductRepository;

import java.util.List;

@Component
public class ProductService  {

    private final ProductRepository productRepository;

    public ProductService(@Autowired ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public void deleteProduct(List<Product> products) {
        productRepository.deleteAll(products);
    }
}
