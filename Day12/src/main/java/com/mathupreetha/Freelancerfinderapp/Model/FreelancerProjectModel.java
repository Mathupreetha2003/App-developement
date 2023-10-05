package com.mathupreetha.Freelancerfinderapp.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="freelancerprojectmodel")
public class FreelancerProjectModel {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	public FreelancerProjectModel() {
		super();
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	private String name;
	public FreelancerProjectModel(int id, String name, String description, String role) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.role = role;
	}
	private String description;
	private String role;
	
}
