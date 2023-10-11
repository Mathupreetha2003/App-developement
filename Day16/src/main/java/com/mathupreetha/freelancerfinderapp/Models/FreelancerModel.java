package com.mathupreetha.freelancerfinderapp.Models;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.mathupreetha.freelancerfinderapp.Models.enumerate.Role;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="freelancer")
public class FreelancerModel implements UserDetails {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private int age;
    private Date joiningDate;

    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_freelancer_id", referencedColumnName = "id")
    private List<FreelancerSkillsModel> skills;
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_freelancer_id", referencedColumnName = "id")
    private List<FreelancerEducationModel> education;
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_freelancer_id", referencedColumnName = "id")
    private List<FreelancerWorkAndExperienceModel> workAndExperience;
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_freelancer_id", referencedColumnName = "id")
    private List<FreelancerProjectsModel> projects;
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_freelancer_id", referencedColumnName = "id")
    private List<FreelancerAwardsModel> awards;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(nullable = false)
    private Boolean isEnabled;

     @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false, updatable = false)
    private Date createdAt;

    @LastModifiedDate
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = true)
    private Date updatedAt;
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @PrePersist
    protected void onCreate() {
        createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = new Date();
    }

}
