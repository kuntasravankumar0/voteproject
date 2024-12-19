package com.vote.www.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.vote.www.Entity.AdminEntity;
import com.vote.www.exception.UserNotFoundException;
import com.vote.www.repository.AdminRepo;

@Service
public class AdminService {

	
	@Autowired
    AdminRepo Repos; 


    public AdminEntity getAdminByMobile(String mobile) {
    Optional<AdminEntity> existingUser = Repos.findByMobile(mobile);
    
    if (existingUser.isPresent()) {
        return existingUser.get();
    } else {
        throw new UserNotFoundException("User not found with Mobile Number: " + mobile);
    }}
    
    
    
   public ResponseEntity<AdminEntity> createAdmin(AdminEntity adminEntity) {
       String mobile = adminEntity.getMobile();
       Optional<AdminEntity> existingUser = Repos.findByMobile(mobile);
       if (existingUser.isPresent()) {
         
           throw new UserNotFoundException("User with this mobile already exists.");
       } else {
            Repos.save(adminEntity);
           return new ResponseEntity<>( HttpStatus.CREATED);
       }
       
   }

   
  
   public ResponseEntity<String> loginvoteradmin(AdminEntity admin) {
	    // Extract mobile and password from the admin object
	    String mobile = admin.getMobile();
	    String password = admin.getPassword();
	    Optional<AdminEntity> existingUser = Repos.findByMobile(mobile);

	    if (existingUser.isPresent()) {
	        AdminEntity user = existingUser.get();
	        if (password.equals(user.getPassword())) {
	            return new ResponseEntity<>("Login successful", HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
	        }
	    } else {
	        return new ResponseEntity<>("User not found", HttpStatus.UNAUTHORIZED);
	    }
	}


   
   
}
