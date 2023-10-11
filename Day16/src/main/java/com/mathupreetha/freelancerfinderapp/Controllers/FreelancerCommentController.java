package com.mathupreetha.freelancerfinderapp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerCommentModel;
import com.mathupreetha.freelancerfinderapp.Services.FreelancerCommentService;

@RestController
public class FreelancerCommentController {
    @Autowired 
    private FreelancerCommentService fcs;

     @GetMapping("/getfreelancercomment")
    public List<FreelancerCommentModel> getdata(){
        return fcs.getdata();
    }

    @PostMapping("/savefreelancercomment")
    public FreelancerCommentModel savedata(@RequestBody FreelancerCommentModel fam){
        return fcs.savedata(fam);
    }

    @PutMapping("/updatefreelancercomment")
    public FreelancerCommentModel updatedata(@RequestBody FreelancerCommentModel fam,@PathVariable int id){
        return fcs.updatedata(fam, id);
    }

    @DeleteMapping("/deletefreelancercomment")
    public void deletedata(int id){
        fcs.deletedata(id);
    }
}



