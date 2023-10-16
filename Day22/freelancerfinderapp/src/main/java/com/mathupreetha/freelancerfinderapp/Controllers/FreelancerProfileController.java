package com.mathupreetha.freelancerfinderapp.Controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerProfileModel;
import com.mathupreetha.freelancerfinderapp.Services.FreelancerProfileService;
import com.mathupreetha.freelancerfinderapp.constant.Api;


import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@CrossOrigin("*")
public class FreelancerProfileController {
     @Autowired 
    private FreelancerProfileService fcs;

     @GetMapping("/getfreelancerprofile")
    public List<FreelancerProfileModel> getdata(){
        return fcs.getdata();
    }

    @PostMapping("/savefreelancerprofile")
    public FreelancerProfileModel savedata(@RequestBody FreelancerProfileModel fam){
        return fcs.savedata(fam);
    }

    @PutMapping("/updatefreelancerprofile")
    public FreelancerProfileModel updatedata(@RequestBody FreelancerProfileModel fam,@PathVariable int id){
        return fcs.updatedata(fam, id);
    }

    @DeleteMapping("/deletefreelancerprofile")
    public void deletedata(int id){
        fcs.deletedata(id);
    }
}



