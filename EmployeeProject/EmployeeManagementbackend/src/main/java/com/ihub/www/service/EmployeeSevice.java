package com.ihub.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.exception.ResourceNotFoundException;
import com.ihub.www.model.EmployeeModel;
import com.ihub.www.repo.EmployeeRepo;

@Service
public class EmployeeSevice {

	
	
	@Autowired
	EmployeeRepo er;
	
	public List<EmployeeModel> getAllEmployees()
	{
		return er.findAll();
	}
	
	public EmployeeModel createEmployee(EmployeeModel employee)
	{
		        if (er.existsByEmail(employee.getEmail())) {
		            throw new ResourceNotFoundException("Email already exists!");
		        }

		        try {
		            return er.save(employee);
		        } catch (Exception e) {
		            // Handle exception when unique constraint is violated at the database level
		            throw new ResourceNotFoundException("Email already exists!");
		        }
	}
	
	public EmployeeModel getEmployeeById(int id)
	{
		return er.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id Not Found"));
	}
	
	public ResponseEntity<EmployeeModel> updateEmployee(int id,EmployeeModel employee)
	{
		EmployeeModel emp=er.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee Does not exist"));
		emp.setFirstName(employee.getFirstName());
		emp.setLastName(employee.getLastName());
		emp.setEmail(employee.getEmail());
		EmployeeModel updateEmp=er.save(emp);
		return ResponseEntity.ok(updateEmp);
	}

	

	public ResponseEntity<HttpStatus> deleteEmployee(int id)
	{
		EmployeeModel employee=er.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee Does not Exit"));
		er.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}




}
