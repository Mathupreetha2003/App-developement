package com.mathupreetha.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerProfileModel;

@Repository
public interface FreelancerProfileRepoInt extends JpaRepository<FreelancerProfileModel,Integer> {
    
}    

