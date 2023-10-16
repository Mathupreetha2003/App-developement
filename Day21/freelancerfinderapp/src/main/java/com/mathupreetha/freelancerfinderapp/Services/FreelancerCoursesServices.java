package com.mathupreetha.freelancerfinderapp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerCoursesModel;
import com.mathupreetha.freelancerfinderapp.Repo.FreelancerCoursesRepoInt;

@Service
public class FreelancerCoursesServices {
    
     @Autowired
    private FreelancerCoursesRepoInt frei;

    public List<FreelancerCoursesModel> getdata(){
        return frei.findAll();
    }

    public FreelancerCoursesModel savedata(FreelancerCoursesModel fcm){
        return frei.save(fcm);
    }

    public FreelancerCoursesModel updatedata(FreelancerCoursesModel fcm,int id){
        fcm.setId(id);
        return frei.save(fcm);
    }

    public void deletedata(int id){
        frei.deleteById(id);
    }
}





