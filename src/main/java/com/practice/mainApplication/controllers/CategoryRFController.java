package com.practice.mainApplication.controllers;

import com.practice.mainApplication.DTOModels.CategoryRFDTO;
import com.practice.mainApplication.models.CategoryRF;
import com.practice.mainApplication.services.CategoryRFService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/categoryRF")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryRFController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private CategoryRFService categoryRFService;

    public CategoryRFController (CategoryRFService categoryFIDEService ) {
        super();
        this.categoryRFService = categoryFIDEService;
    }

    @GetMapping
    public List<CategoryRFDTO> getAllFederalDistricts() {

        return categoryRFService.getAll().stream().map(categoryFIDE -> modelMapper.map(categoryFIDE, CategoryRFDTO.class))
                .collect(Collectors.toList());
    }
    @GetMapping("/{id}")
    public ResponseEntity<CategoryRFDTO> getFederalDistrictById(@RequestParam(value="id") Long id) throws Exception {
        CategoryRF categoryFIDE = categoryRFService.getCategoryRFById(id);

        CategoryRFDTO postResponse = modelMapper.map(categoryFIDE, CategoryRFDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }

    @PostMapping
    @GetMapping("/new")
    public ResponseEntity<CategoryRFDTO> createFederalDistrict(@RequestBody CategoryRFDTO categoryFIDEDTO) {

        // convert DTO to entity
        CategoryRF postRequest = modelMapper.map(categoryFIDEDTO,CategoryRF.class);

        CategoryRF categoryFIDE = categoryRFService.createCategoryRF(postRequest);

        // convert entity to DTO
        CategoryRFDTO postResponse = modelMapper.map(categoryFIDE, CategoryRFDTO.class);

        return new ResponseEntity<CategoryRFDTO>(postResponse, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<CategoryRFDTO> updateFederalDistrict(@PathVariable long id, @RequestBody CategoryRFDTO categoryFIDEDTO) throws Exception {

        // convert DTO to Entity
        CategoryRF postRequest = modelMapper.map(categoryFIDEDTO, CategoryRF.class);

        CategoryRF categoryFIDE = categoryRFService.updateCategoryRF(id, postRequest);

        // entity to DTO
        CategoryRFDTO postResponse = modelMapper.map(categoryFIDE, CategoryRFDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }

    @DeleteMapping("/{id}")
    public void deleteFederalDistrict(@PathVariable(name = "id") Long id) throws Exception {
        categoryRFService.deleteCategoryRF(id);
    }
}
