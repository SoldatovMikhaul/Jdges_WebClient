package com.practice.mainApplication.repository;

import com.practice.mainApplication.DTOModels.JudgeDTO;
import com.practice.mainApplication.models.Judge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface JudgeRepository extends JpaRepository<Judge, Long> {
}