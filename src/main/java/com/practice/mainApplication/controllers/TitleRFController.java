package com.practice.mainApplication.controllers;
import com.practice.mainApplication.DTOModels.TitleRFDTO;
import com.practice.mainApplication.models.TitleRF;
import com.practice.mainApplication.services.TitleRFService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/titleRF")
@CrossOrigin(origins = "http://localhost:3000")
public class TitleRFController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private TitleRFService titleRFService;

    public TitleRFController (TitleRFService titleRFService ) {
        super();
        this.titleRFService = titleRFService;
    }

    @GetMapping
    public List<TitleRFDTO> getAllTitleRFs() {

        return titleRFService.getAll().stream().map(titleRF -> modelMapper.map(titleRF, TitleRFDTO.class))
                .collect(Collectors.toList());
    }
    @GetMapping("/{id}")
    public ResponseEntity<TitleRFDTO> getTitleRFById(@RequestParam(value="id") Long id) throws Exception {
        TitleRF titleRF = titleRFService.getTitleRFById(id);

        TitleRFDTO postResponse = modelMapper.map(titleRF, TitleRFDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }

    @PostMapping
    @GetMapping("/new")
    public ResponseEntity<TitleRFDTO> createTitleRF(@RequestBody TitleRFDTO titleRFDTO) {

        // convert DTO to entity
        TitleRF postRequest = modelMapper.map(titleRFDTO,TitleRF.class);

        TitleRF titleRF = titleRFService.createTitleRF(postRequest);

        // convert entity to DTO
        TitleRFDTO postResponse = modelMapper.map(titleRF, TitleRFDTO.class);

        return new ResponseEntity<TitleRFDTO>(postResponse, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<TitleRFDTO> updateTitleRF(@PathVariable long id, @RequestBody TitleRFDTO titleRFDTO) throws Exception {

        // convert DTO to Entity
        TitleRF postRequest = modelMapper.map(titleRFDTO, TitleRF.class);

        TitleRF titleRF =titleRFService.updateTitleRF(id, postRequest);

        // entity to DTO
        TitleRFDTO postResponse = modelMapper.map(titleRF, TitleRFDTO.class);

        return ResponseEntity.ok().body(postResponse);
    }

    @DeleteMapping("/{id}")
    public void deleteFTitleRF(@PathVariable(name = "id") Long id) throws Exception {
        titleRFService.deleteTitleRF(id);
    }
}

