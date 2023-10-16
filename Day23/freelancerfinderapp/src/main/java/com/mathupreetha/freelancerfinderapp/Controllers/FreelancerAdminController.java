package com.mathupreetha.freelancerfinderapp.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerAdminModel;
import com.mathupreetha.freelancerfinderapp.Services.FreelancerAdminService;
import com.mathupreetha.freelancerfinderapp.constant.Api;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping(Api.ADMIN)
@RequiredArgsConstructor
@CrossOrigin("*")
public class FreelancerAdminController {
 
     @Autowired 
    private FreelancerAdminService fas;

     @GetMapping("/getadmin")
    public List<FreelancerAdminModel> getdata(){
        return fas.getdata();
    }

    @PostMapping("/saveadmin")
    public FreelancerAdminModel savedata(@RequestBody FreelancerAdminModel fam){
        return fas.savedata(fam);
    }

    @PutMapping("/updateadmin")
    public FreelancerAdminModel updatedata(@RequestBody FreelancerAdminModel fam,@PathVariable int id){
        return fas.updatedata(fam, id);
    }

    @DeleteMapping("/deletefreelanceradmin")
    public void deletedata(int id){
        fas.deletedata(id);
    }
}




