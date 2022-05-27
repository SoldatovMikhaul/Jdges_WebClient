package com.practice.mainApplication.controllers;

import com.practice.mainApplication.DTOModels.CategoryFIDEDTO;
import com.practice.mainApplication.models.CategoryFIDE;
import com.practice.mainApplication.services.CategoryFIDEService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/categoryFIDE")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryFIDEController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private CategoryFIDEService categoryFIDEService;

    public CategoryFIDEController (CategoryFIDEService categoryFIDEService ) {
        super();
        this.categoryFIDEService = categoryFIDEService;
    }

    @GetMapping
    public List<CategoryFIDEDTO> getAllFederalDistricts() {

        return categoryFIDEService.getAll().stream().map(categoryFIDE -> modelMapper.map(categoryFIDE, CategoryFIDEDTO.class))
                .collect(Collectors.toList());
    }
    @GetMapping("/{id}")
    public ResponseEntity<CategoryFIDEDTO> getFederalDistrictById(@RequestParam(value="id") Long id) throws Exception {
        CategoryFIDE categoryFIDE = categoryFIDEService.getCategoryFIDEById(id);

        CategoryFIDEDTO postResponse = modelMapper.map(categoryFIDE, CategoryFIDEDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }

    @PostMapping
    @GetMapping("/new")
    public ResponseEntity<CategoryFIDEDTO> createFederalDistrict(@RequestBody CategoryFIDEDTO categoryFIDEDTO) {

        // convert DTO to entity
        CategoryFIDE postRequest = modelMapper.map(categoryFIDEDTO,CategoryFIDE.class);

        CategoryFIDE categoryFIDE = categoryFIDEService.createCategoryFIDE(postRequest);

        // convert entity to DTO
        CategoryFIDEDTO postResponse = modelMapper.map(categoryFIDE, CategoryFIDEDTO.class);

        return new ResponseEntity<CategoryFIDEDTO>(postResponse, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<CategoryFIDEDTO> updateFederalDistrict(@PathVariable long id, @RequestBody CategoryFIDEDTO categoryFIDEDTO) throws Exception {

        // convert DTO to Entity
        CategoryFIDE postRequest = modelMapper.map(categoryFIDEDTO, CategoryFIDE.class);

        CategoryFIDE categoryFIDE = categoryFIDEService.updateCategoryFIDE(id, postRequest);

        // entity to DTO
        CategoryFIDEDTO postResponse = modelMapper.map(categoryFIDE, CategoryFIDEDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }

    @DeleteMapping("/{id}")
    public void deleteFederalDistrict(@PathVariable(name = "id") Long id) throws Exception {
        categoryFIDEService.deleteCategoryFIDE(id);
    }
}
