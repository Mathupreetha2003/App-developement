package com.mathupreetha.freelancerfinderapp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerModel;
import com.mathupreetha.freelancerfinderapp.Services.FreelancerService;
import com.mathupreetha.freelancerfinderapp.constant.Api;
import com.mathupreetha.freelancerfinderapp.dto.request.AuthenticationRequest;
import com.mathupreetha.freelancerfinderapp.dto.request.RegisterRequest;
import com.mathupreetha.freelancerfinderapp.dto.response.AuthenticationResponse;

@RestController
@RequestMapping(Api.AUTH)
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private FreelancerService authService;


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        boolean isRegistered = authService.userRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registered successfully")
                : ResponseEntity.badRequest().body("Sommething went wrong!");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authService.userAuthentication(request));
    }

    @GetMapping("/getfreelancerdata")
    public List<FreelancerModel> getdata(){
        return authService.getdata();
    }

    
}
