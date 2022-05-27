package com.practice.mainApplication.controllers;

import com.practice.mainApplication.DTOModels.RegionRFDTO;
import com.practice.mainApplication.models.RegionRF;
import com.practice.mainApplication.services.RegionRFService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/regionRF")
@CrossOrigin(origins = "http://localhost:3000")
public class RegionRFController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private RegionRFService regionRFService;

    public RegionRFController (RegionRFService regionRFService ) {
        super();
        this.regionRFService = regionRFService;
    }

    @GetMapping
    public List<RegionRFDTO> getAllFederalDistricts() {

        return regionRFService.getAll().stream().map(regionRF -> modelMapper.map(regionRF, RegionRFDTO.class))
                .collect(Collectors.toList());
    }
    @GetMapping("/{id}")
    public ResponseEntity<RegionRFDTO> getFederalDistrictById(@RequestParam(value="id") Long id) throws Exception {
        RegionRF regionRF = regionRFService.getRegionRFById(id);

        RegionRFDTO postResponse = modelMapper.map(regionRF, RegionRFDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }

    @PostMapping
    @GetMapping("/new")
    public ResponseEntity<RegionRFDTO> createFederalDistrict(@RequestBody RegionRFDTO regionRFDTO) {

        // convert DTO to entity
        RegionRF postRequest = modelMapper.map(regionRFDTO,RegionRF.class);

        RegionRF regionRF = regionRFService.createRegionRF(postRequest);

        // convert entity to DTO
        RegionRFDTO postResponse = modelMapper.map(regionRF, RegionRFDTO.class);

        return new ResponseEntity<RegionRFDTO>(postResponse, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<RegionRFDTO> updateFederalDistrict(@PathVariable long id, @RequestBody RegionRFDTO regionRFDTO) throws Exception {

        // convert DTO to Entity
        RegionRF postRequest = modelMapper.map(regionRFDTO, RegionRF.class);

        RegionRF regionRF = regionRFService.updateRegionRF(id, postRequest);

        // entity to DTO
        RegionRFDTO postResponse = modelMapper.map(regionRF, RegionRFDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }

    @DeleteMapping("/{id}")
    public void deleteFederalDistrict(@PathVariable(name = "id") Long id) throws Exception {
        regionRFService.deleteRegionRF(id);
    }
}
