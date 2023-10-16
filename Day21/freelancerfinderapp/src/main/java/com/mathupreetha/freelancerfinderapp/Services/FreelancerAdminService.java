package com.mathupreetha.freelancerfinderapp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerAdminModel;
import com.mathupreetha.freelancerfinderapp.Repo.FreelancerAdminRepoInt;


@Service
public class FreelancerAdminService {
    @Autowired
    private FreelancerAdminRepoInt fari;

     public List<FreelancerAdminModel> getdata(){
        return fari.findAll();
    }

    public FreelancerAdminModel savedata(FreelancerAdminModel fam){
        return fari.save(fam);
    }

    public FreelancerAdminModel updatedata(FreelancerAdminModel fam,int id){
        fam.setId(id);
        return fari.save(fam);
    }

    public void deletedata(int id){
        fari.deleteById(id);
    }
}






