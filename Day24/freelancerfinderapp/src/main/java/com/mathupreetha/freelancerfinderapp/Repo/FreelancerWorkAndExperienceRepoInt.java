package com.mathupreetha.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerWorkAndExperienceModel;

@Repository
public interface FreelancerWorkAndExperienceRepoInt extends JpaRepository<FreelancerWorkAndExperienceModel,Integer> {
    
}
