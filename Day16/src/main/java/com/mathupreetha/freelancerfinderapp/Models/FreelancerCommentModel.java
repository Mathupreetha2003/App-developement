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
@Table(name="freelancercomments")
public class FreelancerCommentModel {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String day;
    private String time;
    private String name;
    private String comment;
    private String description;
    private String location;
    private int rating;
    private Date postedDate;
}



