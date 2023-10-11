package com.mathupreetha.freelancerfinderapp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerCoursesModel;
import com.mathupreetha.freelancerfinderapp.Services.FreelancerCoursesServices;
import com.mathupreetha.freelancerfinderapp.constant.Api;

@RestController
@RequestMapping(Api.AUTH)
public class FreelancerCoursesController {

    @Autowired
    private FreelancerCoursesServices fcs;

     @GetMapping("/getfreelancercourses")
    public List<FreelancerCoursesModel> getdata(){
        return fcs.getdata();
    }

    @PostMapping("/savefreelancercourses")
    public FreelancerCoursesModel savedata(@RequestBody FreelancerCoursesModel fem){
        return fcs.savedata(fem);
    }

    @PutMapping("/updatefreelancereducation")
    public FreelancerCoursesModel updatedata(@RequestBody FreelancerCoursesModel fem,@PathVariable int id){
        return fcs.updatedata(fem, id);
    }

    @DeleteMapping("/deletefreelanceredourses")
    public void deletedata(int id){
        fcs.deletedata(id);
    }
}




