package com.mathupreetha.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerAdminModel;

@Repository
public interface FreelancerAdminRepoInt extends JpaRepository<FreelancerAdminModel,Integer> {
    
}
