package com.mathupreetha.freelancerfinderapp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerProfileModel;
import com.mathupreetha.freelancerfinderapp.Repo.FreelancerProfileRepoInt;

@Service
public class FreelancerProfileService {
     @Autowired
    private FreelancerProfileRepoInt fprei;

     public List<FreelancerProfileModel> getdata(){
        return fprei.findAll();
    }

    public FreelancerProfileModel savedata(FreelancerProfileModel fcm){
        return fprei.save(fcm);
    }

    public FreelancerProfileModel updatedata(FreelancerProfileModel fcm,int id){
        fcm.setId(id);
        return fprei.save(fcm);
    }

    public void deletedata(int id){
        fprei.deleteById(id);
    }

}





