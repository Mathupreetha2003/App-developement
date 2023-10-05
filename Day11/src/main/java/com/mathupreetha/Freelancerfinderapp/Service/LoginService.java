package com.mathupreetha.Freelancerfinderapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mathupreetha.Freelancerfinderapp.Model.LoginModel;
import com.mathupreetha.Freelancerfinderapp.Repo.LoginRepoInt;


@Service
public class LoginService{
	@Autowired
	private LoginRepoInt lr;

	public List<LoginModel> getLoginData() {
		return lr.findAll();
	}

	public void saveLoginData(LoginModel le) {
		lr.save(le);
		
	}

	public void updateLoginData(LoginModel le) {
		lr.save(le);
		
	}

	public void deleteLoginData(int id) {
		lr.deleteById(id);
	}

	
	
}
