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

import com.mathupreetha.freelancerfinderapp.Models.FreelancerReviewsModel;
import com.mathupreetha.freelancerfinderapp.Services.FreelancerReviewsServices;
import com.mathupreetha.freelancerfinderapp.constant.Api;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@CrossOrigin("*")
public class FreelancerReviewsController {
 
     @Autowired
    private FreelancerReviewsServices frs;

     @GetMapping("/getfreelancerreviews")
    public List<FreelancerReviewsModel> getdata(){
        return frs.getdata();
    }

    @PostMapping("/savefreelancerreviews")
    public FreelancerReviewsModel savedata(@RequestBody FreelancerReviewsModel fem){
        return frs.savedata(fem);
    }

    @PutMapping("/updatefreelancerreviews")
    public FreelancerReviewsModel updatedata(@RequestBody FreelancerReviewsModel fem,@PathVariable int id){
        return frs.updatedata(fem, id);
    }

    @DeleteMapping("/deletefreelancerreviews")
    public void deletedata(int id){
        frs.deletedata(id);
    }
}




