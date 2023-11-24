package com.infinite.crm.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {                         //user pojo

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="email")
	private String email;
	
	@Column(name="mobileno")
	private String mobileno;
	
	@Column(name="password")
	private String password;
	
	@Column(name="retypepassword")
	private String retypepassword;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRetypepassword() {
		return retypepassword;
	}

	public void setRetypepassword(String retypepassword) {
		this.retypepassword = retypepassword;
	}
	
	

	
}
