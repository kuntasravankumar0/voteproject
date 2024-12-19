package com.vote.www.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vote.www.Entity.VoteEntity;



@Repository
public interface VoteRepository extends JpaRepository<VoteEntity, Long> {

	Optional<VoteEntity> findByMobile(String mobile);
	Optional<VoteEntity> findByMobileOrPassword(String mobile, String password);
	
	
}
