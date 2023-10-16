package com.mathupreetha.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.mathupreetha.freelancerfinderapp.Models.FreelancerCoursesModel;

@Repository
public interface FreelancerCoursesRepoInt extends JpaRepository<FreelancerCoursesModel,Integer> {
    
}



