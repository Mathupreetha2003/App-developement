package com.mathupreetha.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerCommentModel;

@Repository
public interface FreelancerCommentRepoInt extends JpaRepository<FreelancerCommentModel,Integer> {
    
}


