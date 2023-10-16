package com.mathupreetha.freelancerfinderapp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerReviewsModel;
import com.mathupreetha.freelancerfinderapp.Repo.FreelancerReviewsRepoInt;

@Service
public class FreelancerReviewsServices {
    
    @Autowired
    private FreelancerReviewsRepoInt frri;

     public List<FreelancerReviewsModel> getdata(){
        return frri.findAll();
    }

    public FreelancerReviewsModel savedata(FreelancerReviewsModel frm){
        return frri.save(frm);
    }

    public FreelancerReviewsModel updatedata(FreelancerReviewsModel frm,int id){
        frm.setId(id);
        return frri.save(frm);
    }

    public void deletedata(int id){
        frri.deleteById(id);
    }

}




