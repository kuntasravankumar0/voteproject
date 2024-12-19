package com.ihub.www.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.ihub.www.model.EmployeeModel;
import com.ihub.www.service.EmployeeSevice;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/employee")
public class EmployeeController {

	@Autowired
	EmployeeSevice es;
	

	
	
	//http://localhost:6060/employee/get
	@GetMapping("/get")
	public List<EmployeeModel> getAllEmployees()
	{
		return es.getAllEmployees();
	}

	//http://localhost:6060/employee/post
	@PostMapping("/post")
	public EmployeeModel createEmployee(@RequestBody EmployeeModel employee)
	{
		return es.createEmployee(employee);
	}
	
	//http://localhost:6060/employee/getbyid/
	@GetMapping("/getbyid/{id}")
	public EmployeeModel getEmployeeById(@PathVariable int id)
	{
		return es.getEmployeeById(id);
	}

	
	//http://localhost:6060/employee/update/
	@PutMapping("/update/{id}")
	public ResponseEntity<EmployeeModel> updateEmployee(@PathVariable int id,@RequestBody EmployeeModel employee)
	{
		return es.updateEmployee(id,employee);
	}
	
	
	//http://localhost:6060/employee/delete/
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable int id)
	{
		return es.deleteEmployee(id);
		
	}


}
