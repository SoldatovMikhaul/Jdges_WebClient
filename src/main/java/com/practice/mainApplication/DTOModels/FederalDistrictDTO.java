package com.practice.mainApplication.DTOModels;

import com.practice.mainApplication.models.Judge;
import lombok.Data;

import java.util.List;

@Data
public class FederalDistrictDTO {
    private Long id;
    private String fullName;
    private String shortName;
}
