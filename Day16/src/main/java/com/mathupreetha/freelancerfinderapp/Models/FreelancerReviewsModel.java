package com.mathupreetha.freelancerfinderapp.Models;


import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="freelancerreviews")
public class FreelancerReviewsModel {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String name;
    private String image;
    private String price;
    private String positivity;
    private int sold;
    private int liked;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "freelancer_id",referencedColumnName = "id")
    private List<FreelancerCommentModel> comment;
    
    

}



