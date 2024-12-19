package com.vote.www.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vote.www.Entity.AdminEntity;

@Repository
public interface AdminRepo extends JpaRepository <AdminEntity, Long> { 
	
	Optional<AdminEntity> findByMobileOrPassword(String mobile, String password);
	Optional<AdminEntity> findByMobile( String mobile);
}
