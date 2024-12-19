package com.vote.www.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vote.www.Entity.VoteEntity;
import com.vote.www.service.VoterService;



@RestController
@RequestMapping("/votes")
@CrossOrigin(origins="*")
public class VoteConterller {

	

    @Autowired
    private VoterService voterService; 

// http://localhost:5050:votes/mobile/{mobile}
 
    @PostMapping("/post")
    public ResponseEntity<VoteEntity> createUser(@RequestBody VoteEntity voteEntity) {
        return voterService.createUser(voteEntity);
    }


    @PostMapping("/login")
    public ResponseEntity<String> loginvoterperson(@RequestBody VoteEntity voteEntity) {
        return voterService.loginvoterperson(voteEntity);
    }
    
    @GetMapping("/getall")
    public List<VoteEntity> getAllUsers() {
    	return  voterService.getAllUsers(); 
    }
    
    
    
    @GetMapping("/mobile/{mobile}")
    public VoteEntity getUserByMobile(@PathVariable String mobile) {
        return voterService.getUserByMobile(mobile);
    }
    
    @PutMapping("/update/{mobile}")
    public ResponseEntity<VoteEntity> updatedata(@RequestBody VoteEntity voteEntity,@PathVariable String mobile) {
        return voterService.updatedata(voteEntity,mobile);
    }

    
    
    @DeleteMapping("/delete/{mobile}")
    public String deletevoter(@PathVariable String mobile) {
        return	voterService.deleteVoter(mobile);
        }
        
    
    
}
