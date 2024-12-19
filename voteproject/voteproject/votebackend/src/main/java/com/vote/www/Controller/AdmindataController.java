package com.vote.www.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vote.www.Entity.AdminEntity;
import com.vote.www.service.AdminService;

@RestController
@RequestMapping("/Admin")
@CrossOrigin(origins="*")
public class AdmindataController {

	
	//http://localhost:5050/post
    @Autowired
    private AdminService service; 

    @PostMapping("/post")
    public ResponseEntity<AdminEntity> createadmin(@RequestBody AdminEntity entity) {
    	return service.createAdmin(entity);
    }
    
    @PostMapping("/login")
    public ResponseEntity<String> loginvoteradmin(@RequestBody  AdminEntity admin) {
        return service.loginvoteradmin(admin);
    }

    @GetMapping("/mobile/{mobile}")
    public AdminEntity getAdminByMobile(@PathVariable String mobile) {
        return service.getAdminByMobile(mobile);
    }
	
    
    
    
}
