package com.mathupreetha.Freelancerfinderapp.Service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mathupreetha.Freelancerfinderapp.Dto.Request.AuthenticationRequest;
import com.mathupreetha.Freelancerfinderapp.Dto.Request.RegisterRequest;
import com.mathupreetha.Freelancerfinderapp.Dto.Response.AuthenticationResponse;
import com.mathupreetha.Freelancerfinderapp.Model.User;
import com.mathupreetha.Freelancerfinderapp.Model.enumerate.Role;
import com.mathupreetha.Freelancerfinderapp.Repo.UserRepository;
import com.mathupreetha.Freelancerfinderapp.Service.AuthenticationService;
import com.mathupreetha.Freelancerfinderapp.Util.JwtUtil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthenticationService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    private JwtUtil jwtUtil;

    @Override
    public boolean userRegistration(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .uid(user.getUid())
                .build();
    }
}