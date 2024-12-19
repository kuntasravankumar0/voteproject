package com.vote.www.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.vote.www.Entity.VoteEntity;
import com.vote.www.exception.UserNotFoundException;
import com.vote.www.repository.VoteRepository;


@Service
public class VoterService {
	
        @Autowired
        private VoteRepository voteRepository; 
    
        
        
       public List<VoteEntity> getAllUsers() {
        return voteRepository.findAll();
       }

    

    public ResponseEntity<VoteEntity> createUser(VoteEntity voteEntity) {
    String mobile = voteEntity.getMobile();
    Optional<VoteEntity> existingUser = voteRepository.findByMobile(mobile);
    
    if (existingUser.isPresent()) {
        throw new UserNotFoundException("User with this mobile already exists.");
    } else {
        voteRepository.save(voteEntity);
        return new ResponseEntity<>( HttpStatus.CREATED);
    }
    }
    
    public ResponseEntity<String> loginvoterperson(VoteEntity voteEntity) {
        String mobile = voteEntity.getMobile();
        String password = voteEntity.getPassword();
        Optional<VoteEntity> existingUser = voteRepository.findByMobile(mobile);
        if (existingUser.isPresent()) {
            VoteEntity user = existingUser.get();

            if (password.equals(user.getPassword())) {
                return new ResponseEntity<>("Login successful", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
            }
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.UNAUTHORIZED);
        }
    }
    
    
//    public ResponseEntity<VoteEntity> updatedata( VoteEntity voteEntity, String mobile) {
//        Optional<VoteEntity> existingUser = voteRepository.findByMobile(mobile);
//        if (existingUser.isPresent()) {
//        	
//            VoteEntity user = existingUser.get();
//            user.setName(voteEntity.getName());
//            user.setEmail(voteEntity.getEmail());
//            user.setMobile(voteEntity.getMobile());
//            user.setAge(voteEntity.getAge());
//            user.setAadhar(voteEntity.getAadhar());
//            user.setPassword(voteEntity.getPassword());
//             voteRepository.save(user);
//            return new ResponseEntity<>( HttpStatus.CREATED);
//        }
//        throw new UserNotFoundException("User not found with mobile no: " + mobile);
//        }
//    
    public ResponseEntity<VoteEntity> updatedata(VoteEntity voteEntity, String mobile) {
        Optional<VoteEntity> existingUser = voteRepository.findByMobile(mobile);
        
        if (existingUser.isPresent()) {
            VoteEntity user = existingUser.get();
            user.setName(voteEntity.getName());
            user.setEmail(voteEntity.getEmail());
            user.setMobile(voteEntity.getMobile()); 
            user.setAge(voteEntity.getAge());
            user.setAadhar(voteEntity.getAadhar());
            user.setPassword(voteEntity.getPassword());

            voteRepository.save(user);
            
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            throw new UserNotFoundException("User not found with mobile no: " + mobile);
        }
    }
    
    
    
    
    
        public void deleteUser(Long id) {
        Optional<VoteEntity> user = voteRepository.findById(id);
        if (user.isPresent()) {
            voteRepository.delete(user.get());
        } else {
            
            throw new UserNotFoundException("User not found with ID: " + id);
        }
    	}
    
    
    
        public VoteEntity getUserByMobile(String mobile) {
        Optional<VoteEntity> existingUser = voteRepository.findByMobile(mobile);
        
        
        
        if (existingUser.isPresent()) {
        	
            return existingUser.get();
            
        } else {
            throw new UserNotFoundException("User not found with Mobile Number: " + mobile);
        }}
        
        
        
        public String deleteVoter(String mobile) {
            // Find the voter by mobile number
            Optional<VoteEntity> voter = voteRepository.findByMobile(mobile);

            // Check if the voter exists
            if (voter.isPresent()) {
                // If voter exists, delete the entity
                voteRepository.delete(voter.get());
                return "Voter with mobile " + mobile + " has been successfully deleted.";
            } else {
                // If voter does not exist, return an error message
                return "Voter with mobile " + mobile + " not found.";
            }
        }

            
        
        
        
    
    
    
}
