package com.mathupreetha.Freelancerfinderapp.Dto.Request;

import com.mathupreetha.Freelancerfinderapp.Model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
    public UserRequest() {
		super();
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Boolean getIsEnabled() {
		return isEnabled;
	}
	public void setIsEnabled(Boolean isEnabled) {
		this.isEnabled = isEnabled;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public UserRequest(String name, String email, String password, Boolean isEnabled, Role role) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.isEnabled = isEnabled;
		this.role = role;
	}
	private String name;
    private String email;
    private String password;
    private Boolean isEnabled;
    private Role role;
}

