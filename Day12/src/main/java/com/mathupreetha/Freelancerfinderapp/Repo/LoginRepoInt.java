package com.mathupreetha.Freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mathupreetha.Freelancerfinderapp.Model.FreelancerModel;
import com.mathupreetha.Freelancerfinderapp.Model.FreelancerProjectModel;
import com.mathupreetha.Freelancerfinderapp.Model.LoginModel;

@Repository
public interface LoginRepoInt extends JpaRepository<LoginModel,Integer > {

}



