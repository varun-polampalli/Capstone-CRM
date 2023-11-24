package com.infinite.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.infinite.crm.exceptions.UserNotFoundException;
import com.infinite.crm.model.Products;
import com.infinite.crm.service.ProductService;



@RestController
@CrossOrigin("http://localhost:3000")
public class ProductsController {
	
	@Autowired
	private ProductService productService;
	
	@PostMapping("/product")
	public Products newProduct(@RequestBody Products newProduct) {
		return productService.adduser(newProduct);
	}

	@GetMapping("/products")
	List<Products> getAllProducts() {
		return productService.productList();
	}

	@GetMapping("/product/{id}")
	public Products getProductById(@PathVariable Long id) {
		return productService.productById(id);
	}
	
	@PutMapping("/product/{id}")
	Products updateUser(@RequestBody Products newProduct, @PathVariable Long id) {
		return productService.findById(id,newProduct);
	}

	@DeleteMapping("/product/{id}")
	String deleteProduct(@PathVariable Long id) {
		if (!productService.exist(id)) {
			throw new UserNotFoundException(id);
		}
		productService.delete(id);
		return "User with id " + id + " has been deleted success.";
	}
}
