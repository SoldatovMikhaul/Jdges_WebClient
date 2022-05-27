package com.practice.mainApplication.controllers;


import com.practice.mainApplication.DTOModels.FederalDistrictDTO;
import com.practice.mainApplication.DTOModels.JudgeDTO;
import com.practice.mainApplication.models.FederalDistrict;
import com.practice.mainApplication.models.Judge;
import com.practice.mainApplication.services.FederalDistrictService;
import com.practice.mainApplication.services.JudgeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/federalDistricts")
@CrossOrigin(origins = "http://localhost:3000")
public class FederalDistrictController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private FederalDistrictService federalDistrictService;

    public FederalDistrictController (FederalDistrictService federalDistrictService) {
        super();
        this.federalDistrictService = federalDistrictService;
    }

   // @CrossOrigin(origins = "http://localhost:3000")
    @Transactional
    @GetMapping
    public List<FederalDistrictDTO> getAllFederalDistricts() {

        return federalDistrictService.getAll().stream().map(federalDistrict -> modelMapper.map(federalDistrict, FederalDistrictDTO.class))
                .collect(Collectors.toList());
    }
    @GetMapping("/{id}")
    public ResponseEntity<FederalDistrictDTO> getFederalDistrictById(@RequestParam(value="id") Long id) throws Exception {
        FederalDistrict federalDistrict = federalDistrictService.getFederalDistrictById(id);

        FederalDistrictDTO postResponse = modelMapper.map(federalDistrict, FederalDistrictDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }

    @PostMapping
    @GetMapping("/new")
    public ResponseEntity<FederalDistrictDTO> createFederalDistrict(@RequestBody FederalDistrictDTO federalDistrictDTO) {

        // convert DTO to entity
        FederalDistrict postRequest = modelMapper.map(federalDistrictDTO, FederalDistrict.class);

        FederalDistrict federalDistrict = federalDistrictService.createFederalDistrict(postRequest);

        // convert entity to DTO
        FederalDistrictDTO postResponse = modelMapper.map(federalDistrict, FederalDistrictDTO.class);

        return new ResponseEntity< FederalDistrictDTO>(postResponse, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<FederalDistrictDTO> updateFederalDistrict(@PathVariable long id, @RequestBody FederalDistrictDTO federalDistrictDTO) throws Exception {

        // convert DTO to Entity
        FederalDistrict postRequest = modelMapper.map(federalDistrictDTO, FederalDistrict.class);

        FederalDistrict federalDistrict = federalDistrictService.updateFederalDistrict(id, postRequest);

        // entity to DTO
        FederalDistrictDTO postResponse = modelMapper.map(federalDistrict, FederalDistrictDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }

    @DeleteMapping("/{id}")
    public void deleteFederalDistrict(@PathVariable(name = "id") Long id) throws Exception {
        federalDistrictService.deleteFederalDistrict(id);
    }
}
