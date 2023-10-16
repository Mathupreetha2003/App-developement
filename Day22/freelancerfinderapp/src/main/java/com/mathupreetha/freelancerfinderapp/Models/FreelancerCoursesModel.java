package com.mathupreetha.freelancerfinderapp.Models;
import java.util.Date;

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
@Table(name="freelancercourses")
public class FreelancerCoursesModel {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String image;
    private String courseName;
    private String weeks;
    private String description;
    private Date startingDate;

}


