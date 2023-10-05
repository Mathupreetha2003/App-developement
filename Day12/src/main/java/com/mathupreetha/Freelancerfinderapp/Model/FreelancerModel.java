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
@AllArgsConstructor
@NoArgsConstructor
@Table(name="freelancermodel")
public class FreelancerModel {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int id;
	public FreelancerModel() {
		super();
	}
	public FreelancerModel(int id, String image, String location, String name, String job, String salary,
			String description, int projects) {
		super();
		this.id = id;
		this.image = image;
		this.location = location;
		this.name = name;
		this.job = job;
		this.salary = salary;
		this.description = description;
		this.projects = projects;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getProjects() {
		return projects;
	}
	public void setProjects(int projects) {
		this.projects = projects;
	}
	public String image;
	public String location;
	public String name;
	public String job;
	public String salary;
	public String description;
	public int projects;
	
}
