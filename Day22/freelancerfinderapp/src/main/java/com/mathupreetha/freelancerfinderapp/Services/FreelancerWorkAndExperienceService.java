package com.mathupreetha.freelancerfinderapp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerWorkAndExperienceModel;
import com.mathupreetha.freelancerfinderapp.Repo.FreelancerWorkAndExperienceRepoInt;

@Service
public class FreelancerWorkAndExperienceService {
    
    @Autowired
    private FreelancerWorkAndExperienceRepoInt fweri;

    public List<FreelancerWorkAndExperienceModel> getdata(){
        return fweri.findAll();
    }

    public FreelancerWorkAndExperienceModel savedata(FreelancerWorkAndExperienceModel fem){
        return fweri.save(fem);
    }

    public FreelancerWorkAndExperienceModel updatedata(FreelancerWorkAndExperienceModel fem,int id){
        fem.setId(id);
        return fweri.save(fem);
    }

    public void deletedata(int id){
        fweri.deleteById(id);
    }
}
