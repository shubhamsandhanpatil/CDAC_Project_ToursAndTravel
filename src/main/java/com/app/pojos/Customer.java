package com.app.pojos;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Entity
@Data
public class Customer {
	
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	
	private int id;
	
	
	private String name;
	
	
	private String city;
	
	
	@Email(message="Please provide a valid email address")
	@Column(name = "email", unique = true)
	private String userid;
	
	
	private String pwd;
	
	
	@Pattern(regexp="(^[0-9]{10}$)")
	private String phone;
	
	
	private String gender;
	
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_timestamp")
	private Date createdTimestamp=new Date();


	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Customer(int id, String name, String city,
			@Email(message = "Please provide a valid email address") String userid, String pwd,
			@Pattern(regexp = "(^[0-9]{10}$)") String phone, String gender, Date createdTimestamp) {
		super();
		this.id = id;
		this.name = name;
		this.city = city;
		this.userid = userid;
		this.pwd = pwd;
		this.phone = phone;
		this.gender = gender;
		this.createdTimestamp = createdTimestamp;
	}


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


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getUserid() {
		return userid;
	}


	public void setUserid(String userid) {
		this.userid = userid;
	}


	public String getPwd() {
		return pwd;
	}


	public void setPwd(String pwd) {
		this.pwd = pwd;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}


	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}
	

}