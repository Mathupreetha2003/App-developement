package com.mathupreetha.Freelancerfinderapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.mathupreetha.Freelancerfinderapp.Model.FreelancerProjectModel;
import com.mathupreetha.Freelancerfinderapp.Service.FreelancerProjectService;


public class FreelancerController {

	@Autowired
	private FreelancerProjectService cs;
	
	@GetMapping("/getfreelancer")
	public List<FreelancerProjectModel> getFreelancerDetails()
	{
		return cs.getFreelancerData();
	}
	
	@PostMapping("/savefreelancer")
	public FreelancerProjectModel saveCosmeticsDetails(@RequestBody FreelancerProjectModel ce)
	{
		return cs.saveFreelancerData(ce);
	}
	
	
	@DeleteMapping("/deletefreelancer")
	public void deleteFreelancerDetails(@RequestParam int id)
	{
		cs.deleteFreelancerData(id);
	}
	
	@PutMapping("/updatefreelancer/{id}")
	public FreelancerProjectModel updateCosmeticsDetails(@RequestBody FreelancerProjectModel frem,@PathVariable int id)
	{
		frem.setId(id);
		return cs.updateFreelancerData(frem,id);
	}
	
}
