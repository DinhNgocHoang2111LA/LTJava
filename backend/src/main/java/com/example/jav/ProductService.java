package com.example.jav;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.jav.Product;

public interface ProductService {
    Product createProduct(Product product);

    Product getProductById(Long productId);

    Page<Product> getAllProducts(Pageable pageable);

    Product updateProduct(Product product);

    void deleteProduct(Long productId);
    // public void saveImage(MultipartFile file) throws IOException;
}
