package com.mathupreetha.Freelancerfinderapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.mathupreetha.Freelancerfinderapp.Model.FreelancerModel;
import com.mathupreetha.Freelancerfinderapp.Model.FreelancerProjectModel;
import com.mathupreetha.Freelancerfinderapp.Repo.FreelancerProjectRepoInt;

public class FreelancerProjectService {

	@Autowired
	private FreelancerProjectRepoInt fpri;
	
	public List<FreelancerProjectModel> getFreelancerData(){
		return fpri.findAll();
	}
	
	public FreelancerProjectModel saveFreelancerData(FreelancerProjectModel frem) {
		return fpri.save(frem);
		
	}
	
	public FreelancerProjectModel updateFreelancerData(FreelancerProjectModel frem,int id){
        frem.setId(id);
        return fpri.save(frem);
    }

	public void deleteFreelancerData(int id) {
		 fpri.deleteById(id);
		
	}
}
