package com.practice.mainApplication.repository;

import com.practice.mainApplication.models.FederalDistrict;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FederalDistrictRepository extends JpaRepository<FederalDistrict, Long> {
}
