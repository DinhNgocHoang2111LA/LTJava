package com.example.jav;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
@Entity
public class Product {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	 public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSlug() {
		return slug;
	}

	public void setSlug(String slug) {
		this.slug = slug;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	 public Product() {
	    }
	
	 public Product(int id, String name, String slug, String description, Double price, String image) {
		super();
		this.id = id;
		this.name = name;
		this.slug = slug;
		this.description = description;
		this.price = price;
		this.image = image;
	}
	 @Override
	    public String toString() {
	        return "Product{" +
	                "id=" + id +
	                ", name='" + name + '\'' +
	                ", slug='" + slug + '\'' +
	                 ", description='" + description + '\'' +
	                  ", price='" + price + '\'' +
	                   ", image='" + image + '\'' +
	                '}';
	    }
	 private int id;

	 private String name;
	 private String slug;
	 private String description;

	 private Double price;
	    
	 private String image;

	 
}
