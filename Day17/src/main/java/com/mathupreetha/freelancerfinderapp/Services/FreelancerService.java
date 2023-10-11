package com.mathupreetha.freelancerfinderapp.Services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mathupreetha.freelancerfinderapp.Models.FreelancerModel;
import com.mathupreetha.freelancerfinderapp.Models.enumerate.Role;
import com.mathupreetha.freelancerfinderapp.Repo.FreelancerRepoInt;
import com.mathupreetha.freelancerfinderapp.Util.JwtUtil;
import com.mathupreetha.freelancerfinderapp.dto.request.AuthenticationRequest;
import com.mathupreetha.freelancerfinderapp.dto.request.RegisterRequest;
import com.mathupreetha.freelancerfinderapp.dto.response.AuthenticationResponse;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FreelancerService {
    
    @Autowired
    private FreelancerRepoInt fri;

     private final FreelancerRepoInt frerepo;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    public boolean userRegistration(RegisterRequest request) {
        Optional<FreelancerModel> isUserExists = frerepo.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = FreelancerModel.builder()
                    .firstName(request.getFirstName())
                    .lastName(request.getLastName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role .valueOf(request.getRole().toUpperCase()))
                    .build();
            frerepo.save(user);
            return true;
        } else {
            return false;
        }
    }

    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = frerepo.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .id(user.getId())
                .build();
    }


    public List<FreelancerModel> getdata(){
        return fri.findAll();
    }

    public FreelancerModel savedata(FreelancerModel user){
        Date currentDate = new Date();
        user.setJoiningDate(currentDate);
        return fri.save(user);
    }

    public FreelancerModel updatedata(FreelancerModel fm,int id){
        fm.setId(id);
        return fri.save(fm);
    }
    
    public void deletedata(int id){
        fri.deleteById(id);
    }

    public FreelancerModel findById(int id)
    {
        return fri.findById(id);
    }
}
