package com.mathupreetha.Freelancerfinderapp.Dto.Response;

import com.mathupreetha.Freelancerfinderapp.Model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    public UserResponse() {
		super();
	}
	public UserResponse(Long uid, String name, String email, Boolean isEnabled, Role role) {
		super();
		this.uid = uid;
		this.name = name;
		this.email = email;
		this.isEnabled = isEnabled;
		this.role = role;
	}
	public Long getUid() {
		return uid;
	}
	public void setUid(Long uid) {
		this.uid = uid;
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
	private Long uid;
    private String name;
    private String email;
    private Boolean isEnabled;
    private Role role;
}
