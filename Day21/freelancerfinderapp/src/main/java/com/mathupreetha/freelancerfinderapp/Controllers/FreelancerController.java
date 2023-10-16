package com.mathupreetha.freelancerfinderapp.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerModel;
import com.mathupreetha.freelancerfinderapp.Services.FreelancerService;
import com.mathupreetha.freelancerfinderapp.constant.Api;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.FREELANCER)
@RequiredArgsConstructor
@CrossOrigin("*")
public class FreelancerController {
    
    @Autowired
    private FreelancerService fs;

    

    @GetMapping("/getfreelancerbyid/{id}")
    public FreelancerModel getdatabyid(@PathVariable int id)
    {
        return fs.findById(id);
    }

    @PostMapping("/savefreelancerdata")
    public FreelancerModel savedata(@RequestBody FreelancerModel fm){
        return fs.savedata(fm);
    }

    @PutMapping("/updatefreelancerdata")
    public FreelancerModel updatedata(@RequestBody FreelancerModel fm,@RequestParam int id){
        return fs.updatedata(fm, id);
    }

    @DeleteMapping("/deletefreelancerdata")
    public void deletedata(@RequestParam int id){
        fs.deletedata(id);
    }
}
