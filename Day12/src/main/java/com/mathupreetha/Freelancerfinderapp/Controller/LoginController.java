package com.mathupreetha.Freelancerfinderapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mathupreetha.Freelancerfinderapp.Model.LoginModel;
import com.mathupreetha.Freelancerfinderapp.Service.LoginService;



@RestController
public class LoginController {
	@Autowired
	private LoginService ls;
	
	@GetMapping("/getlogin")
	public List<LoginModel> getLoginDetails()
	{
		return ls.getLoginData();
	}
	
	@PostMapping("/savelogin")
	public void saveLoginDetails(@RequestBody LoginModel le)
	{
		ls.saveLoginData(le);
	}
	
	@PutMapping("/updatelogin")
	public void updateLoginDetails(@RequestBody LoginModel le,@RequestParam int id)
	{
		le.setId(id);
		ls.updateLoginData(le);
	}
	
	@DeleteMapping("/deletelogin")
	public void deleteLoginDetails(@RequestParam int id)
	{
		ls.deleteLoginData(id);
	}

}
