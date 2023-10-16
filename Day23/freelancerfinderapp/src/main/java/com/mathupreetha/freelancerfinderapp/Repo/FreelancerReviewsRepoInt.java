package com.mathupreetha.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerReviewsModel;

@Repository
public interface FreelancerReviewsRepoInt extends JpaRepository<FreelancerReviewsModel,Integer>{
    
}



