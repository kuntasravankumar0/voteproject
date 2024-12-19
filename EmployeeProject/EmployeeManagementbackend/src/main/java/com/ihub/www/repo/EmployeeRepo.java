package com.ihub.www.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ihub.www.model.EmployeeModel;

@Repository
public interface EmployeeRepo extends JpaRepository<EmployeeModel,Integer>{

	
	 boolean existsByEmail(String email); 
}
