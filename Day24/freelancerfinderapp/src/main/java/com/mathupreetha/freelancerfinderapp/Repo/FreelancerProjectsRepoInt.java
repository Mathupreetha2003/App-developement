package com.mathupreetha.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerProjectsModel;

@Repository
public interface FreelancerProjectsRepoInt extends JpaRepository<FreelancerProjectsModel,Integer>{
    
}
