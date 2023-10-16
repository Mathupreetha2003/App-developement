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
@Table(name="freelanceradminmodel")
public class FreelancerAdminModel {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String email;
    private String password;
}





