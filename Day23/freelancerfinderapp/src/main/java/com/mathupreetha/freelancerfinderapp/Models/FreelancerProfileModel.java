package com.mathupreetha.freelancerfinderapp.Models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="freelancerprofilemodel1")
public class FreelancerProfileModel {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String image;
    private String name;
    private String location;
    private String description;
    private int rating;
    private int numberofprojects;
    private int paymentperhour;
    
}



