package com.mathupreetha.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerSkillsModel;

@Repository
public interface FreelancerSkillsRepoInt extends JpaRepository<FreelancerSkillsModel,Integer>{
    
}
