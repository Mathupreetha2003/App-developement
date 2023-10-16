package com.mathupreetha.freelancerfinderapp.constant;

import java.util.Arrays;
import java.util.List;


public class Api {
    
    public static final String DEFAULT = "http://localhost:8181";
    public static final String REACT = "http://localhost:3000";
    public static final String AUTH = "/api/v1/auth";
    public static final String USER = "/api/v1/user";
    public static final String FREELANCER = "/api/v1/freelancer";
    public static final String ADMIN = "/api/v1/admin";
    public static final String CLIENT = "/api/v1/client";
    public static final List<String> HEADERS = Arrays.asList("Authorization", "Content-Type");
    public static final List<String> METHODS = Arrays.asList("GET", "POST", "PUT", "DELETE");
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:3000");
}
