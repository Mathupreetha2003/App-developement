package com.mathupreetha.freelancerfinderapp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerCommentModel;
import com.mathupreetha.freelancerfinderapp.Repo.FreelancerCommentRepoInt;

@Service
public class FreelancerCommentService {
     @Autowired
    private FreelancerCommentRepoInt fcri;

      public List<FreelancerCommentModel> getdata(){
        return fcri.findAll();
    }

    public FreelancerCommentModel savedata(FreelancerCommentModel fcm){
        return fcri.save(fcm);
    }

    public FreelancerCommentModel updatedata(FreelancerCommentModel fcm,int id){
        fcm.setId(id);
        return fcri.save(fcm);
    }

    public void deletedata(int id){
        fcri.deleteById(id);
    }
}








